const data = require("./client.json");

function searchData(client, key, value) {
    return client.find((item) => item[key].includes(value));
}

const found = searchData(data, "nome", "Kirby");

console.log(found)

// função feita para encontrar objeto na lista de objetos do arquivo(client.json)