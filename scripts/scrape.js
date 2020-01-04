// require axios 
var axios = require("axios");

require('dotenv').config();
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bfc8e374d6df45af85688db28a5bf373');
var articles = [];

// random id generator
const uuidv4 = require('uuid/v4');

function scrape(input) {

    const scrapePromise = new Promise((resolve, reject) => {

        newsapi.v2.everything({
            q: input,
            language: 'en',
        }).then(response => {
            articles = response.articles.slice(0, 5);
            console.log("Article Response:", articles);
            let promises = [];
            articles.forEach(article => {
                promises.push(axios({
                    "method": "GET",
                    "url": "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded",
                        "x-rapidapi-host": "twinword-sentiment-analysis.p.rapidapi.com",
                        "x-rapidapi-key": "bcbc7d6dd8msh5e1eb73a59e842fp1df3fcjsnd9394db0f416"
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
                    // let obj = {};
                    // obj["id"] = uuidv4();
                    // article.push(obj);
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


