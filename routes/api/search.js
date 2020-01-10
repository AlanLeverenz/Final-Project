const router = require("express").Router();
const searchController = require("../../controllers/searchController");


// Matches with "/api/news"
router
  .route("/:query")
  .get(searchController.getNews)
  
  // .use(searchController.getNews);
 
module.exports = router;