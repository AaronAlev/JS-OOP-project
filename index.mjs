import Course from "./classes/course.js"
import Student from "./classes/student.js"
import School from "./classes/school.js"
import Person from "./classes/person.js"

const aimar = new Student("Aimar")
const marten = new Student("Marten")
aimar.setId(123455)
marten.setId(554321)

const math = new Course("Math")
const english = new Course("English")

const voco = new School("VOCO")
voco.addCourse(math)
voco.addCourse(english)
voco.addStudent(aimar)
voco.addStudent(marten)
voco.addStudentGrade(aimar, math, 5)
voco.addStudentGrade(aimar, english, 5)
voco.addStudentGrade(marten, english, 5)
voco.addStudentGrade(marten, math, 4)

console.log(voco.getStudents().length)