/* Utilizando a estrutura de repetição While;
var num = 1;

while (num <= 10) {
    console.log(num)
    ++num
}
*/

// Script com o mesmo objetivo mas fazendo o uso da estrutura de repetição For;
console.log('Vai começar a contagem.\n')

for (var num = 1; num <= 10; num++) {
    console.log(num*(Math.random()*1000))
}

console.log('\nContagem finalizada.\n')