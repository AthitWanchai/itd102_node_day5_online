module.exports = (app) => {
    var router = require("express").Router();
    const university = require("../controllers/university.controller");

    router.get("/", university.findAllUniversity);

    router.post("/create-university", university.createUniversity);
    router.get("/edit-university/:id", university.findUniversityId);
    router.put("/update-university/:id", university.updateUniversityById);
    router.delete("/delete-university/:id", university.deleteUniversityById);

    app.use("/api/university", router);
};