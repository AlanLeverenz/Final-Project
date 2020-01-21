const router = require("express").Router();
const previewController = require("../../controllers/previewController");


// Matches with "/api/preview"
router
  .route("/:query")
  .get(previewController.getPreview);
  
 
module.exports = router;