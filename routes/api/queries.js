const router = require("express").Router();
const queriesController = require("../../controllers/queriesController");

// Matches with "/api/queries"
router.route("/")
  .get(queriesController.findAll)
  .post(queriesController.create)
  
// Matches with "/api/queries/:queryId"
router.route("/:id")
  .get(queriesController.findById)
  .put(queriesController.update)
  .delete(queriesController.remove);

module.exports = router;