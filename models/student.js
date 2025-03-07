'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      // define association here if needed in the future, e.g.,
      // Student.hasMany(models.Course, { foreignKey: 'studentId' });
    }
  }
  Student.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students',
      timestamps: true
    }
  );
  return Student;
};