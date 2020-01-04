// require axios 
var axios = require("axios");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bfc8e374d6df45af85688db28a5bf373');
var articles = [];

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: 'L9i2JSiO0PkNJm-1uVN-HL1vtUEX57ETOKnIW7Lbpcwu'
  }),
  url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/5d28562f-bf78-494a-861b-76271abe2558',
});

var runWatson = (article) =>  {
  // console.log("Watson Query:", article.content);
const analyzeParams = {
  'url': article.url,
  'features': {'sentiment': 
  {}},
};

// console.log("AnalyzeParams:", analyzeParams);
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
            // console.log("Article Response:", articles);
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


