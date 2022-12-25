
// Array
let num = [5, 8, 4]

// Objeto
let amigo = {
    nome: 'José',
    sexo: 'M', 
    peso: 85.4,
    engordar(p) {
        console.log('Engordou')
        this.peso += p
    }
}

console.log(`${amigo.nome} Pesa ${amigo.peso}`)
amigo.engordar(3)
console.log(`${amigo.nome} Pesa ${amigo.peso}`)

let num2 = [6, 7, 2]

console.log(num.concat(num2))