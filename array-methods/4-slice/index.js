const alunos = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Lucas",
    "Mariana",
    "Fernando",
    "Carla",
    "Gustavo",
    "Lúcia",
    "Rafael",
    "Beatriz",
    "Marcelo",
    "Isabela",
    "Antônio",
    "Sofia",
    "Rodrigo",
    "Camila",
    "Paulo",
    "Natália"
  ]
// o slice precisa receber dois parametros, o primeiro com a posição inicial desejada para seleção dos itens, e o segundo com o ponto final. Na sala 2 apenas passamos o ponto inicial, porque o slice entende que seve ir até o fim da lista
let classroomOne = alunos.slice(0, alunos.length / 2)
let classroomTwo = alunos.slice(alunos.length / 2)

console.log(`A sala 1 é composta pelos seguintes alunos: ${classroomOne}`)
console.log(`Já a sala 2 é composta pelos alunos: ${classroomTwo}`)