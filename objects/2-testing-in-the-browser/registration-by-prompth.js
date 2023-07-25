/*Valores de objetos podem ser definidos por variaveis que estão "fora" do seu contexto. Abra o browser e teste*/ 

const nomeRes = prompt("Qual é o seu nome ?")
const idadeRes = prompt("Quantos anos você tem ?")

const cliente = {
    nome: nomeRes,
    idade: idadeRes,
}

console.log(`O seu nome é ${cliente.nome} e você tem ${cliente.idade}`)
