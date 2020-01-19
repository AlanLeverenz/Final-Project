const router = require("express").Router();
const articleRoutes = require("./articles");
const queryRoutes = require("./queries");
const searchRoutes = require("./search");
const userRoutes = require("./user");

// /api/article routes
router.use("/articles", articleRoutes);

// /api/queries routes
router.use("/queries", queryRoutes);

// /api/news routes
router.use("/news", searchRoutes);

// /api/user routes
router.use("/user", userRoutes);

module.exports = router;
