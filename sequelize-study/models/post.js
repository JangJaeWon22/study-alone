"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      db.Post.belongsTo(db.User);
      db.Post.belongsToMany(db.Hashtag, {
        through: "PostHashtag",
      });
    }
  }
  Post.init(
    {
      content: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
      timestamps: true,
      paranoid: false,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  return Post;
};
