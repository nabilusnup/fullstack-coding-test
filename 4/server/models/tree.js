'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tree.belongsTo(models.User, {foreignKey: "UserId"})
      Tree.hasMany(models.TreeChildren, {foreignKey: "TreeId"})
    }
  }
  Tree.init({
    label: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};