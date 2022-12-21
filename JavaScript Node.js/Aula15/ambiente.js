let num = [5, 6, 3 , 6]

console.log(num) // Array como foi requirido

// num[4] = 4
num.push(4) // adicionando o valor 4 com o método PUSH

console.log(num) // Vai imprimir o Array após a adição

console.log(num.length) // O método LENGTH vai retornar a quantidade de itens no Array

num.sort() // O método SORT() vai retorna o Array em forma crescente
console.log(num)

console.log(num[2]) // Imprime o terceiro valor do Array

let pos = num.indexOf(6) // O método indexOf retorna a posição do item passado, caso não haja esse valor, é retornado "-1"

console.log(`O valor 6 foi encontrado na posíção ${pos}`)