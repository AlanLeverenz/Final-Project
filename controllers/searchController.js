// Controller for our scraper
// ============================
const db = require("../models");
const getNews = require("../scripts/scrape");
const searchFilter = require("../scripts/searchFilter");

module.exports = {

  getNews: function(req, res) {

    const newsQuery = req.params.query.split(" ").join("-");
    
    return getNews(newsQuery)
      .then(function(query) {
        console.log("SAVE TO QUERY COLLECTION === ");
        return db.Query.create(query)
      .then(function(articles) {
        console.log("RUN SEARCH FILTER === ");
        return searchFilter(articles)
      })
      .then(function(filtered) {
        console.log("RETURN FILTERED RESPONSE === ");
        return res.json(filtered)
      })
      .catch(function(err) {
        res.json({
          message: "Search error!!",
          error: err
        });
      });
    }); 
  } 
};
