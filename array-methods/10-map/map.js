const grades = [10, 9.5, 7, 8];
const gradesUp = grades.map((value) => {
    return value + 1 >= 10 ? 10 : value + 1
})

console.log(gradesUp)