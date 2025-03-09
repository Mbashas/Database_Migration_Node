'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      // A Course can have many enrollments:
      Course.hasMany(models.Enrollment, { foreignKey: 'course_id' });
      // For many-to-many relation with Students (if desired):
      Course.belongsToMany(models.Student, {
        through: models.Enrollment,
        foreignKey: 'course_id',
        otherKey: 'student_id'
      });
    }
  }
  Course.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Course'
    }
  );
  return Course;
};