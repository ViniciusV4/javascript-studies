const studentsRoomOne = ["Roberta", "Camila", "Bruna", "Jessica"]
const averegeGrades = [7, 10, 10, 6.5]

const studentsAndGrades = [studentsRoomOne, averegeGrades]

function searchStudent(student) {
    //se a aluna estiver no sistema entao faça:
    if (studentsAndGrades[0].includes(student)) {

        //acessando listas dentro da lista principal e nomeando cada uma delas
        const [listStudents, listAverege] = studentsAndGrades

        //buscando indice da aluna
        let indexStudent = listStudents.indexOf(student)

        //atribuindo a nota de acordo com o indice
        let averege = listAverege[indexStudent]
        
        //imprimindo valores
        console.log(`A aluna ${student} obteve a nota ${averege} ao final do curso`)
    } else {
        console.log(`A aluna ${student} não está em nosso sitema`)
    }
}

// passe aqui o nome da aluna que deseja encontrar
searchStudent("Roberta")
