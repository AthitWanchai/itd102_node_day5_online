const db = require("../models");
const Student = db.student;
const University =db.university;

exports.findAllStudent = (req, res) => {
    try {
        Student.findAll({
            include: [
                {
                    model: University,
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

exports.insertStudent = (req, res) => {
    try {
        if (!req.body.name ) {
            res.status(400).json({
                message: "Student cannot be empty!"
            });
            return;
        }
        const newStudent = {
            name: req.body.name,
        };

        Student.create(newStudent)
            .then(data => {
                res.status(200).json({ message: "Student created." });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });

    } catch (error) {
        console.log(error);
    }
};


exports.findStudentId = (req, res) => {
    try {
        const id = req.params.id;
        Student.findByPk(id, {
            include: [
                {
                    model: University,
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

exports.updateStudentById = (req, res) => {
    try {
        const id = req.params.id;

        const updateStudent = {
            name: req.body.name,
            position: req.body.position,
            companyId: req.body.companyId
        };

        Student.update(updateStudent, { where: { id: id } })
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

exports.deleteStudentById = (req, res) => {
    try {
        const id = req.params.id;
        Student.destroy({ where: { id:id } })
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