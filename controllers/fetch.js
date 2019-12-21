// Controller for our scraper
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {

  scrapeHeadlines: function(req, res) {
      console.log(req.params.query);
      // var query = req.body.toLowerCase();
      var input = req.params.query
      var newsSearch = input.split(" ").join("-");
      console.log("NEWSEARCH = " + newsSearch);
      return scrape(newsSearch)
      .then(function(articles) {
        // console.log("Articles Scraped",articles);
        // then insert articles into the db
        return db.Headline.create(articles);
      })
      .catch(function(err) {
        // This query won't insert articles with duplicate titles, but it will error after inserting the others
        res.json({
          message: "Scrape error!!",
          error: err
        });
      });
  }
};
