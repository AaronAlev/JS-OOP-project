const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student')

router.get("/:name", (req, res) => studentController.getStudentName(req, res))
router.get("/:name/grades", (req, res) => studentController.getStudentStudents(req, res))

module.exports=router;