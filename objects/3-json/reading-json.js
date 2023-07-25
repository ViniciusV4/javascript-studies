const dados = require("./client.json");

console.log(dados);
console.log(typeof dados);

const clienteString = JSON.stringify(dados);

console.log(`Transformando um objeto em string: ${clienteString}`);
// Com o JSON.parse revertemos o processo e transformamos uma string em objeto.
const objetoCliente = JSON.parse(clienteString);

console.log(objetoCliente);