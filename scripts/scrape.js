// require axios 
var axios = require("axios");

require('dotenv').config();
// require('dotenv').config( {debug: process.env.DEBUG } );

const newsKey = process.env.NEWS_API_KEY_JOHN;
const ibmKey = process.env.IBM_WATSON_KEY;
const ibmURL = process.env.IBM_WATSON_URL;

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(newsKey);
var articles = [];

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: ibmKey
  }),
  url: ibmURL
});

var runWatson = (article) =>  {
  return new Promise((resolve, reject) => {
const analyzeParams = {
  'url': article.url,
  'features': {'sentiment': 
  {}},
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    resolve (analysisResults);

  })
  .catch(err => {
    console.log('error:', err);
    reject(err);
  });
});
}
// random id generator
const uuidv4 = require('uuid/v4');

// create queryId
let d = new Date();
let dateString = d.toLocaleDateString();
let newDate = dateString.replace(/\//g, "-");
let queryId = newDate + "-" + Math.ceil(Math.random() * 1000);

function scrape(input) {

    const scrapePromise = new Promise((resolve, reject) => {

        newsapi.v2.everything({
            q: input,
            language: 'en',
        }).then(response => {
            let limit = response.articles.length;
            limit > 12 ? limit = 12 : limit;
            articles = response.articles.slice(0, limit);
            let promises = [];
            articles.forEach(article => {
                promises.push(runWatson(article))
            });

            Promise.all(promises)
              .then(responses => {
                articles.map((article, i) => {
                    let keys = Object.keys(responses[i].result.sentiment.document)
                    keys.forEach(key => {
                      article[key] = responses[i].result.sentiment.document[key]
                    })
                    // create article.id
                    article.id = uuidv4();
                    article.key = article.id;

                    // create padScore
                    let myNum = 50 * (1 + article.score)
                    article.padScore = Math.ceil(myNum);

                    // create colorScore
                    let myColor = 12 * (1 + article.score);
                    let myCeil = Math.ceil(myColor);
                    myColor = "c" + myCeil.toString();
                    article.colorScore = myColor;

                    // insert queryId common to all articles
                    article.queryId = queryId;

                    return article
                })

                // sort articles
                articles.sort((a, b) => parseFloat(a.score) - parseFloat(b.score));
                console.log("SCRAPE SORTED ====");
                console.log(articles)
                 
                resolve(articles)
            })
            .catch((error) => {
                reject(error);
            });
        });
    });
    return scrapePromise
}

module.exports = scrape;


