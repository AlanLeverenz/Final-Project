// Controller for our scraper
// ============================
const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {

  getNews: function(req, res) {
      console.log(req.params.query);
      // var query = req.body.toLowerCase();
      const input = req.params.query
      const newsSearch = input.split(" ").join("-");
      console.log("NEWSEARCH = " + newsSearch);
      return scrape(newsSearch)
      .then(function(articles) {
        console.log(articles)
        // redirect back to client
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
