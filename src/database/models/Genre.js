module.exports = (sequelize, dateTypes) => {
  const alias = "Genre";
  const cols = {
    id: {
      type: dateTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: dateTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: dateTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    active: {
      type: dateTypes.BOOLEAN,
      allowNull: false,
    },
  };
  const config = {
    tableName: "genres",
    timesTamps: true,
    underscored: true,
  };
  const Movie = sequelize.define(alias, cols, config);

  return Movie;
};
