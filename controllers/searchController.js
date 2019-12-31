// Controller for our scraper
// ============================
const db = require("../models");
const getNews = require("../scripts/scrape");

module.exports = {

  findAll: function(req, res) {

      console.log("REQUEST TO SEARCH CONTROLLER: " + req.query);

      console.log(req.params.query);

      const input = req.params.query
      // join search words with hyphen
      const newsSearch = input.split(" ").join("-");

      console.log("NEWSEARCH = " + newsSearch);

      return getNews(newsSearch)

      .then(function(articles) {

        console.log(articles)

        res.json(articles)
        // can compare to saved articles here, or save directly
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
