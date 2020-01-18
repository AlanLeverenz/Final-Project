const getPreview = require("../scripts/preview");

module.exports = {

    getPreview: function(req, res) {
  
      
      return getPreview()
      
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