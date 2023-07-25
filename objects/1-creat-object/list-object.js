const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: false,
        complemento: "ap 934",
    },
    {
        rua: "R. Joseph",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
    {
        rua: "R. Climber",
        numero: 1337,
        apartamento: false,
        complemento: "ap 934",
    }
];

const apartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)
console.log(apartamentos);