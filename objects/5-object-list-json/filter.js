const clientes = require("./client.json");

function filtrarApartamentoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);

// Esse código tem como objetivo filtrar os apartamentos que não possuem complemento