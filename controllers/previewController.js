const getPreview = require("../scripts/preview");

module.exports = {

  getPreview: function(req, res) {
    console.log("Running GetPreview")
    
    return getPreview()
      .then(function(articles) {
        console.log(articles);
        res.json(articles);
      })
      .catch(function(err) {
        console.log("Error",err);
        res.json({
          message: "Preview API error!!",
          error: err
        })
      });
    } 
  };