const students = require("./students.json")

// Display all the students first names one at a time, one per line.
function showStudents(studentList) {
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i]
        console.log(student.firstName)
        console.log(student.grade)
        console.log(student.address)
    }
}

showStudents(students)