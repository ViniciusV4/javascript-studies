let grades = [10, 8, 9.5, 10];

let sum = 0;
// percorre o array grades,e acessa o item por causa do parametro "note" que foi passado dentro da função
grades.forEach(function(note) {
    sum += note
})

let averege = sum / grades.length

console.log(`A média final do 1° semestre é ${averege.toFixed(2)}`)