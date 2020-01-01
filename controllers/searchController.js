// Controller for our scraper
// ============================
const db = require("../models");
const getNews = require("../scripts/scrape");

module.exports = {

  getNews: function(req, res) {

    const newsQuery = req.params.query.split(" ").join("-");
    return getNews(newsQuery)
    .then(function(articles) {

      res.json(articles)
      console.log(articles)

      // could compare to saved articles here, or save directly
      // return db.Article.create(articles);
    })
    .catch(function(err) {
      res.json({
        message: "Search error!!",
        error: err
      });
    });
  }
};
