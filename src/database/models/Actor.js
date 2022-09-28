module.exports = (sequelize, dateTypes) => {
  const alias = "Actor";
  const cols = {
    id: {
      type: dateTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    first_name: {
      type: dateTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: dateTypes.STRING(100),
      allowNull: false,
    },
    rating: {
      type: dateTypes.DECIMAL(3, 1).UNSIGNED,
      defaultValue: null,
    },
    favorite_movie_id: {
      type: dateTypes.INTEGER.UNSIGNED,
      defaultValue: null,
    },
  };
  const config = {
    tableName: "actors",
    timesTamps: true,
    underscored: true,
  };
  const Movie = sequelize.define(alias, cols, config);

  return Movie;
};
