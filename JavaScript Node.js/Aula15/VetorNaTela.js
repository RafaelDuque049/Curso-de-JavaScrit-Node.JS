let num = [2, 5, 7, 12, 6, 154]

for (let pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}

console.log()

for (let number in num) {
    console.log(num[number])
}

console.log('\n' + num.join('\n'))

/**
    LEMBRETE: 

    Aprender a usar o método MAP()

    Exemplo:
        map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
 */
