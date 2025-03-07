'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      // Define associations here if needed in the future.
    }
  }
  Teacher.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Teacher'
    }
  );
  return Teacher;
};