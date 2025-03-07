'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate(models) {
      Enrollment.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
      Enrollment.belongsTo(models.Course, { foreignKey: 'course_id', as: 'course' });
    }
  }
  Enrollment.init(
    {
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Enrollment'
    }
  );
  return Enrollment;
};