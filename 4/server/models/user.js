'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Tree, {foreignKey: "UserId"})
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `email is required`,
        },
        notEmpty: {
          msg: `email is required`,
        },
        isEmail: {
          msg: `Email is not valid`,
        },
      },
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `password is required`,
        },
        notEmpty: {
          msg: `password is required`,
        },
        len: {
          args: [5, Infinity],
          msg: "Minimum 5 characters required in password",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((item)=>{
    item.password = hashPassword(item.password)
    return item
  })
  return User;
};