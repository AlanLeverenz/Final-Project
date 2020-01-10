const router = require("express").Router();
const articleRoutes = require("./articles");
const searchRoutes = require("./search");
const userRoutes = require("./user");

// /api/article routes
router.use("/articles", articleRoutes);

// /api/news routes
router.use("/news", searchRoutes);

// /api/user routes
router.use("/user", userRoutes);

module.exports = router;
