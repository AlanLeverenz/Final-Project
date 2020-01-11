// Controller for our scraper
// ============================
const db = require("../models");
const getNews = require("../scripts/scrape");
const searchFilter = require("../scripts/searchFilter");

module.exports = {

  getNews: function(req, res) {

    const newsQuery = req.params.query.split(" ").join("-");
    return getNews(newsQuery)
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
  }
};
