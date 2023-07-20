let grades = [10, 6.5, 7, 5];

let sum = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i] 
}

const averege = sum / grades.length

console.log(`A média final do 1° semestre é ${averege.toFixed(2)}.`)
