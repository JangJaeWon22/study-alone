"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      db.User.hasMany(db.Post);
      db.User.belongsToMany(db.User, {
        foreignKey: "followingId",
        as: "Followers",
        through: "Follow",
      });
      db.User.belongsToMany(db.User, {
        foreignKey: "followerId",
        as: "Followings",
        through: "Follow",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      nick: DataTypes.STRING,
      password: DataTypes.STRING,
      provider: DataTypes.STRING,
      snsId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  return User;
};
