const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/signup"
router.route("/signup")
  .post(userController.create);
  
// Matches with "/api/user/authenticate"
router.route("/authenticate")
  .post(userController.authenticate);
  
// Matches with "/api/user/logout"
router.route("/logout")
  .get(userController.logOut);
  
// Matches with "/api/user/login"
router.route("/login")
  .post(userController.login);

// TO-DO: logout route (delete cookie and session - req.session.destroy)
module.exports = router;
