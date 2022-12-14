const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const { sequelize } = require("../database/models");

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.new);
router.get("/movies/recomended", moviesController.recomended);
router.get("/movies/detail/:id", moviesController.detail);

module.exports = router;
