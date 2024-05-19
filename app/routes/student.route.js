module.exports = (app) => {
    var router = require("express").Router();
    const student = require("../controllers/student.controller");

    router.get("/", student.findAllStudent);

    router.post("/create-student", student.insertStudent);

    router.get("/edit-student/:id", student.findStudentId);

    router.put("/update-student/:id", student.updateStudentById);

    router.delete("/delete-student/:id", student.deleteStudentById);

    app.use("/api/student", router);
};