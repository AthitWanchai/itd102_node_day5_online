const config = require("../config/db.js");

const dataType = require("sequelize");
const sequelize = new dataType(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect
  }
);

const db = {};

db.dataType = dataType;
db.sequelize = sequelize;

db.student = require("./student.model.js")(sequelize, dataType);
db.university = require("./university.model.js")(sequelize, dataType);
db.student_university = require("./student_university.model.js")(sequelize, dataType);

// many-to-many
db.student.belongsToMany(db.university, {
  through: "student_university",
  foreignKey: "studentId",
  onDelete: 'CASCADE'
});
db.university.belongsToMany(db.student, {
  through: "student_university",
  foreignKey: "universityId",
  onDelete: 'CASCADE'
});

module.exports = db;