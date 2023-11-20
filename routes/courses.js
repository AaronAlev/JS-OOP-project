const express = require('express')
const router = express.Router()

const courseController = require('../controllers/courses')

router.get("/:name", (req, res) => schoolController.getSchoolName(req, res))
router.get("/:name/grades", (req, res) => schoolController.getSchoolStudents(req, res))

module.exports=router;