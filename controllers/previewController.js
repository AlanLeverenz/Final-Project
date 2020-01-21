const getPreview = require("../scripts/preview");

module.exports = {

    getPreview: function(req, res) {
      console.log("Running GetPreview")
      
      return getPreview()
        .then(function(res) {
          console.log("Returning articles from getPreview");
          console.log(res);
          res.json(res)
        })
        .catch(function(err) {
          res.json({
            message: "Preview API error!!",
            error: err
          })
          console.log(error);
        });
      // }); 
    } 
  };