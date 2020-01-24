// require axios 
var axios = require("axios");

require('dotenv').config();
const newsKey = process.env.NEWS_API_KEY;
const rapidKey = process.env.RAPID_API_KEY

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(newsKey);
var articles = [];

// random id generator
const uuidv4 = require('uuid/v4');

function scrape(input) {

    const scrapePromise = new Promise((resolve, reject) => {

        newsapi.v2.everything({
            q: input,
            language: 'en',
        }).then(response => {
            articles = response.articles.slice(0, 12);
            let promises = [];
            articles.forEach(article => {
                promises.push(axios({
                    "method": "GET",
                    "url": "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                        "x-rapidapi-host": "twinword-sentiment-analysis.p.rapidapi.com",
                        "x-rapidapi-key": rapidKey
                    }, "params":
                    {
                        "text": article.content
                    }
                }))
            })
            Promise.all(promises).then(responses => {
                articles.map((article, i) => {
                    let keys = Object.keys(responses[i].data)
                    keys.forEach(key => {
                        article[key] = responses[i].data[key]
                    })
                    article.id = uuidv4();
                    return article
                })
                resolve(articles)
            })
            .catch((error) => {
                reject(error);
            });
        });
    });

    console.log(scrapePromise);
    return scrapePromise;
}

module.exports = scrape;


