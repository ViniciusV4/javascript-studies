const notas = [7, 7, 8, 9];
// com o spread operator os valores das novasNotas ocupam um espaço diferente na memoria e assim nao clona os valores para as duas variaveis, apenas clona o valor de notas passando eles para novasNotas
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);