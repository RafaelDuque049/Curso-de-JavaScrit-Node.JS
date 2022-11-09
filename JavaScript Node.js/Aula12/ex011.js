// Conteúdo: Condições Aninhadas.

const idade = 65;

console.log(`A sua idade é ${idade}.`)

if (idade < 16){
    console.log('não vota.')
} else{ // Caminho a se seguir caso todas as condições não tenham se cumprido.
    if (idade < 18 || idade > 65){ // Primeira condição a se seguir.
        console.log('voto opcional.')
        
    } else if (idade >= 18){ // Caso a primeira condição não tenha se cumprido.
        console.log('Voto obrigatório.')
    }
}