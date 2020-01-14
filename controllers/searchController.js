// Controller for our scraper
// ============================
const db = require("../models");
const getNews = require("../scripts/scrape");
const searchFilter = require("../scripts/searchFilter");

module.exports = {

  getNews: function(req, res) {

    const newsQuery = req.params.query.split(" ").join("-");
    
    return getNews(newsQuery)
    // insert start
      .then(function(news) {
      // then insert news data into the db
        console.log("NEWS === " + news);
        return db.Article.create(news)
      // insert end
      .then(function(articles) {
        return searchFilter(articles)
      })
      .then(function(filtered) {
        res.json(filtered)
      })
      .catch(function(err) {
        res.json({
          message: "Search error!!",
          error: err
        });
      });
    }); //insert paren
  } // insert curly brace
};
