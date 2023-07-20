const classOne = [10, 8, 7, 8, 5]
const classTwo = [5, 5, 10, 7, 8]
const classThree = [9, 8, 7, 4, 6]

function calculateAverage(classRoom) {
    //reduce tem um acumulador que vai somando cada elemento do array ao seu proprio valor, tipo uma variavel que guarda a função da soma
    const grades = classRoom.reduce((acumulador, nota) => acumulador + nota, 0)

    const averege = grades / classRoom.length
    return averege
}

console.log(calculateAverage(classTwo))