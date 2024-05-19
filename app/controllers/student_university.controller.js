const db = require("../models");
const Student_university = db.student_university;
const Student = db.student ;
const University = db.university;


exports.addStudentToUniversity = (req, res) => {
    try {
        if (!req.body.studentId || !req.body.universityId) {
            res.status(400).json({
                message: "Student ID or Sniversity ID cannot be empty!"
            });
            return;
        }

        University.findByPk(req.body.universityId)
        .then((university) => {
            if (!university) {
                return res.status(404).json({ message: "University not found!" });
            }

                Student.findByPk(req.body.studentId)
                    .then((student) => {
                        if (!student) {
                            res.status(404).json({ message: "Student not found!" })
                            return null;
                        }

                        const junctionAttribute = {
                            studentId: student.id,
                            universityId: university.id,
                            degree: req.body.degree
                        };

                        Student_university.create(junctionAttribute)
                        .then( res.status(200).json({message: "Student  created."}))
                        .catch((err) => {
                            res.status(500).json({ message: err.message });
                        });
                    })
            })
            .catch((err) => res.status(500).json({ message: err.message }));

    } catch (error) {
        console.log(error);
    }
};