const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      res.render("moviesList", { movies });
    });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "ASC"]],
    }).then((movies) => {
      res.render("newestMovies", { movies });
    });
  },

  recomended: (req, res) => {
    db.Movie.findAll({
      where: {
        release_date: { [Op.gt]: 0 },
      },
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      return res.render("recommendedMovies", { movies });
    });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movies) => {
      res.render("moviesDetail", {
        movies,
      });
    });
  },
};
