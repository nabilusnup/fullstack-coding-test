'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TreeChildren extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TreeChildren.belongsTo(models.Tree, {foreignKey : "TreeId"})
    }
  }
  TreeChildren.init({
    TreeId: DataTypes.INTEGER,
    children: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TreeChildren',
  });
  return TreeChildren;
};