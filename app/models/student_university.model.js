module.exports = (sequelize, dataType) => {
    const db = require("../models");
    const Student = db.student;
    const University = db.university;

    const Student_university = sequelize.define("student_university", {
        studentId: {
        type: dataType.INTEGER,
        references: {
            model: Student,
            key: 'id'
        }
      },
      universityId: {
        type: dataType.INTEGER,
        references: {
            model: University,
            key: 'id'
        }
      },
      degree: {
        type: dataType.STRING,
        allowNull: false,
      }
      
    },{timestamps: false});
  
    return Student_university;
  };