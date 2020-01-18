// require axios 
var axios = require("axios");

require('dotenv').config();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(NEWS_API_KEY);
let previewArticles = [];


function preview(){
newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
    previewArticles.push(response.articles);
  })};

  module.exports = preview
