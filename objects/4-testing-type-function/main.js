/*
                            Construindo uma função de checagem de tipos:
Para iniciarmos nosso exemplo, desenvolveremos uma função capaz de checar o tipo de qualquer variável que passamos para ela e nos retornar seu tipo em formato de string em caixa baixa.

Essa função nos auxiliará a testar o tipo de nossas estruturas arrays e objetos, além de enriquecer seu repertório de programador:*/

const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
  }

 // Por que você não usa o operador typeof do próprio Javascript ao invés de criar uma função como essa? 
 // O typeof não sabe diferenciar um null de um object.

 console.log(typeof null === typeof {})
// Passando pâmetro para a function
 console.log(typeCheck(null))

 // rode no nodeJS e teste.