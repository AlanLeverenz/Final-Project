// Controller for our scraper
// ============================
const db = require("../models");
const getNews = require("../scripts/scrape");
const searchFilter = require("../scripts/searchFilter");

module.exports = {

  getNews: function(req, res) {

    const newsQuery = req.params.query.split(" ").join("-");
    
    return getNews(newsQuery)
    // save scraped articles to db - OR SAVE AFTER BEING FILTERED?
      // .then(function(news) {
      //   console.log("NEWS === " + news.data);
      //   return db.Article.create(news)
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
    // }); 
  } 
};
