// require axios 
var axios = require("axios");

require('dotenv').config();
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const ibmKey = process.env.IBM_WATSON_KEY
const ibmURL = process.env.IBM_WATSON_URL

console.log("NEWS_API_KEY = " + NEWS_API_KEY );
console.log("ibmKey = " + ibmKey );
console.log("ibmURL = " + ibmURL );

const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('bfc8e374d6df45af85688db28a5bf373');
const newsapi = new NewsAPI(NEWS_API_KEY);
var articles = [];

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    // apikey: ibmKey
    apikey: 'G7bdElL9Xc75ibbM483N2x3rTNd0pR_Rd_nNHNQv_doV'
  }),
  // url: ibmURL
  url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/5d28562f-bf78-494a-861b-76271abe2558'
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

function scrape(input) {

    // create queryId
  let d = new Date();
  let dateString = d.toLocaleDateString();
  let newDate = dateString.replace(/\//g, "-");
  let randomNum = Math.ceil(Math.random() * 10000);
  let queryId = newDate + "-" + randomNum;

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

                //  console.log(article)
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
