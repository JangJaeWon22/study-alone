"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      db.Hashtag.belongsToMany(db.Post, {
        through: "PostHashtag",
      });
    }
  }
  Hashtag.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hashtag",
      timestamps: true,
      underscored: false,
      paranoid: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  return Hashtag;
};
