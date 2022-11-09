// Conteúdo: Condição aninhadas

const hora = new Date().getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 6){
    console.log('Tenha uma boa madrugada.')
} else if (hora <= 12){
    console.log('Tenha um ótimo dia!!')
} else if (hora <= 18){
    console.log('Tenha uma ótima tarde.')
} else{
    console.log('Tenha uma ótima noite.')
}