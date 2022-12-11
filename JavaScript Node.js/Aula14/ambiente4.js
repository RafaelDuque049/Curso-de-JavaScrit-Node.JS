const Num = Math.random()

console.log(Num)

switch (Num > .5) {
    case true:
        console.log('O valor é maior que meio')
    
    case false:
        console.log('O valor é menor que meio')

    default:
        break
}