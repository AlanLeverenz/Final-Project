// require axios 
var axios = require("axios");

require('dotenv').config();
const newsKey = process.env.NEWS_API_KEY;


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(newsKey);
let previewArticles = [];

function preview(){
  const previewPromise = new Promise((resolve, reject) => {

    console.log("Calling preview API");

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
