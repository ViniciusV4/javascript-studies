const students = ["Roberta ", "Camila ", "Bruna ", "Jessica"]
const averegeGrades = [7, 10, 10, 6.5]

const studentsAndGrades = [students, averegeGrades]
//para acessar um array que está dentro de outro array, deve ser passado o array principal e em seguida o indice do elemento que vc deseja acessar, e o indice do elemento que vc busca dentro desse array. Pode parecer confuso então siga o ex: 
console.log(`A aluna ${studentsAndGrades[0][1]} obteve nota ${studentsAndGrades[1][1]} após a prova final`)