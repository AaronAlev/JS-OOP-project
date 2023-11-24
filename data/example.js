const School = require('../classes/school.js')
const Person = require('../classes/person.js')
const Student = require('../classes/student.js')
const Course = require('../classes/course.js')


const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)

//we cannot add one student twice
school.addStudent(student1)

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.addCourse(course1)
school.addCourse(course2)

//we cannot add one course twice
school.addCourse(course1)

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student2, course1, 5)

const student3 = new Student("Cocoo Turner")
student3.setDateOfBirth(2000)

//cannot add grades to the student who is not in the school
school.addStudentGrade(student3, course1, 5)

school.addStudent(student3)
school.addStudentGrade(student3, course1, 3)
school.addStudentGrade(student3, course2, 5)

console.log(school.getCourses())
console.log(school.courses)

module.exports = {
    school,
    course1,
    course2
}