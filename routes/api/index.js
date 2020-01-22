const router = require("express").Router();
const articleRoutes = require("./articles");
const searchRoutes = require("./search");
const previewRoutes = require("./preview")
const userRoutes = require("./user");

// /api/article routes
router.use("/articles", articleRoutes);

// /api/news routes
router.use("/news", searchRoutes);

// /api/preview routes
router.use("/preview", previewRoutes);

// /api/user routes
router.use("/user", userRoutes);

module.exports = router;
