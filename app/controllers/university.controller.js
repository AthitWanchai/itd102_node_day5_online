const db = require("../models");
const Student = db.student;
const University =db.university;



exports.findAllUniversity = (req, res) => {
    try {
        University.findAll({
            include: [
                {
                    model: Student,
                    attributes: ["name"]
                }
            ]
        })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (error) {
        console.log(error);
    }
};

exports.createUniversity = (req, res) => {
    try {
        if (!req.body.name ) {
            res.status(400).json({
                message: "University cannot be empty!"
            });
            return;
        }
        const newUniversity = {
            name: req.body.name,
        };

        University.create(newUniversity)
            .then(data => {
                res.status(200).json({ message: "University created." });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });

    } catch (error) {
        console.log(error);
    }
};

exports.findUniversityId = (req, res) => {
    try {
        const id = req.params.id;
        University.findByPk(id,{
            include: [
                {
                    model: Student,
                    attributes: ["name"]
                }
            ]
        })
            .then(data => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json({
                        message: "Id not found!"
                    });
                }
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            });
    } catch (error) {
        console.log(error);
    }
};

exports.updateUniversityById = (req, res) => {
    try {
        const id = req.params.id;

        const updateUniversity = {
            name: req.body.name,
            position: req.body.position,
            companyId: req.body.companyId
        };

        University.update(updateUniversity, { where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({
                        message: "Updated successfully"
                    });
                } else {
                    res.status(400).json({
                        message: "Update failed!"
                    });
                }
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteUniversityById = (req, res) => {
    try {
        const id = req.params.id;
        University.destroy({ where: { id:id } })
        .then( data => {
            if(data == 1){
                res.status(200).json({
                    message: "Deleted successfully"
                });
            }else{
                res.status(400).json({
                    message: "Deleted failed!"
                });
            }
        })
        .catch( err => {
            res.status(500).json({ message: err.message });
        });
    } catch (error) {
        console.log(error);
    }
};