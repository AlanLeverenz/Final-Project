// require axios 
var axios = require("axios");

require('dotenv').config();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI("bfc8e374d6df45af85688db28a5bf373");
let previewArticles = [];


function preview(){
    console.log("Calling preview");
newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log("Preview Articles from API:",response);
    previewArticles.push(response.articles);
  })};

  module.exports = preview
