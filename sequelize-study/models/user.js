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
      db.User.hasMany(db.Comment, {
        foreignKey: "commenter",
        sourceKey: "name",
      });
    }
  }
  User.init(
    {
      name: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      age: DataTypes.INTEGER,
      married: DataTypes.BOOLEAN,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
