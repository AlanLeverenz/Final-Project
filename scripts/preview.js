// require axios 
var axios = require("axios");

require('dotenv').config();
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const IBM_WATSON_KEY = process.env.IBM_WATSON_KEY

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bfc8e374d6df45af85688db28a5bf373');
var articles = [];

function preview() {
        newsapi.v2.topHeadlines({
            country: us,
            language: 'en',
        }).then(response => {

          // check if any articles were returned, i.e., response.articles.length == null
            articles.push(response);
          // reset slice if less than 10 articles
           
            previewArticles = response.articles.slice(0, 4)
        })};

        