const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// router.use(searchController.getNews);

// Matches with "/api/news"
router
  .route("/:id")
  .get(searchController.findAll)
 
module.exports = router;