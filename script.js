const students = [
    {
        name: "João",
        firstGrade: 8,
        secondGrade: 9,
    },

    {
        name: "Fulano",
        firstGrade: 4,
        secondGrade: 9,
    },

    {
        name: "Cicrano",
        firstGrade: 10,
        secondGrade: 6,
    },

    {
        name: "Beltrano",
        firstGrade: 8,
        secondGrade: 6,
    },
]

let result = (students.firstGrade + students.secondGrade) / 2

    function printGradeAverage(student) {
        return`
            O estudante ${student.name} possui a média final de
            ${((student.firstGrade + student.secondGrade) / 2).toFixed (2)}
        `
        
    }

    for (let student of students) {
        let gradeAverage = printGradeAverage(student)
        alert(gradeAverage)
    }
