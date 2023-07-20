const students = ["Roberta ", "Camila ", "Bruna ", "Jessica"]
const averegeGrades = [7, 10, 10, 6.5]

// o filter vai percorrer o array students e retornar os valores que tiverem o resultado como true, no teste logico na linha de return, criando um novo array so com os alunos aprovados
const approved = students.filter((_, index) => {
    return averegeGrades[index] >= 7
})

console.log(approved)