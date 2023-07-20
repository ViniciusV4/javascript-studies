let cars = ["fox", "civic", "celta", "uno", "gol", "jeta"]

// remove apenas o ultimo item:
cars.pop()

// remove um item especifico, recebendo no primeiro parametro a posicao do elemento, e no segundo o numero de itens que devem ser removidos a partir daquela posicao:
cars.splice(3,1)

console.log(`Os caros que temos disponiveis para aluguel são: ${cars}`)