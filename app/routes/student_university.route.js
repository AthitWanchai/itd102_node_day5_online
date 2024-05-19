module.exports = (app) => {
    var router = require("express").Router();
    const student_university = require("../controllers/student_university.controller");


    router.post("/create-student_university", student_university.addStudentToUniversity);

    app.use("/api/student_university", router);
};