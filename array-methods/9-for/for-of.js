let grades = [10, 8, 9.5, 10];

let sum = 0;
// a cada numero do array grades, um valor diferente é adicionado a varialvel value
for (let value of grades) {
    sum += value
}

let averege = sum / grades.length

console.log(`A média final do 1° semestre é ${averege.toFixed(2)}`)