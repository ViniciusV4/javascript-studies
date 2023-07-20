const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// o set "exclue" os nomes repetidos, mas não possue uma estrutura de array, por isso usamos o spread operator pra transforma ele em uma lista(array)
const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)