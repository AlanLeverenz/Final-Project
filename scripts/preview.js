// require axios 
var axios = require("axios");

require('dotenv').config();
const NEWS_API_KEY = process.env.NEWS_API_KEY;


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4acc3b9a971c4bf0ab6b2c7117303592');
let previewArticles = [];

function preview(){
  const previewPromise = new Promise((resolve, reject) => {

    console.log("Calling preview API");
    console.log("NEWS_API_KEY = " + NEWS_API_KEY);

newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us'
  }).then(response => {
    let limit = response.articles.length;
    limit > 12 ? limit = 12 : limit;
    articles = response.articles.slice(0, limit);
    let promises = [];
    articles.forEach(article => {
        promises.push(article)
    })
    resolve(promises);
  }).catch((error) => {
    reject(error);;

  });
  });
  return previewPromise
};

  module.exports = preview
