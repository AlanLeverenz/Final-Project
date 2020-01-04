// require axios 
var axios = require("axios");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bfc8e374d6df45af85688db28a5bf373');
var articles = [];

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const IamAuthenticator = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: 'BzNYRbEJ0L-5kgoNezgYfi6hJ0Eo5V0i2esVR9tL7DxB',
  }),
  url: 'https://us-south.natural-language-understanding.watson.cloud.ibm.com',
});

var runWatson = (article) =>  {
  console.log("Watson Query:", article.content);
const analyzeParams = {
  'text': article.content,
  'features': {
    'sentiment': {
    }
  }
};

naturalLanguageUnderstanding.analyze(analyzeParams)
  .then(analysisResults => {
    console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
}

function scrape(input) {

    const scrapePromise = new Promise((resolve, reject) => {

        newsapi.v2.everything({
            q: input,
            language: 'en',
        }).then(response => {
            // console.log("Article Array:", response);
            articles = response.articles.slice(0, 5);
            console.log("Article Response:", articles);
            let promises = [];
            articles.forEach(article => {
                promises.push(runWatson(article)
            )
        });
            Promise.all(promises).then(responses => {
                articles.map((article, i) => {
                    let keys = Object.keys(responses[i].data)
                    keys.forEach(key => {
                        // if (key !== "keywords") {
                            article[key] = responses[i].data[key]
                        // }
                    })
                    return article
                })
                console.log(articles);
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


