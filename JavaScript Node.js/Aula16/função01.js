function Par_Impar(num) {
    return (num % 2 == 0 ? `O número ${num} é par` : `O número ${num} é ímpar` )
}

for (num in numero = [6, 5, 7, 20]) {
    console.log(Par_Impar(numero[num]))
}