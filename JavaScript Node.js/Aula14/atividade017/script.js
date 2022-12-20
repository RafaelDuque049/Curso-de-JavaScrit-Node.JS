function gerar_tabuada() {
    let tabuada = String()
    
    let result = document.querySelector('.r_tabuada')
    
    const numero = document.querySelector('#numero').value
    
    if (numero.length == 0) {
        result.innerHTML = null;

        return alert('É necessário passar um número para calcular.\n[Tente Novamente]')
    }

    for (var num = 1 ; num <= 10 ; num++) {
        tabuada += (`${num} x ${numero} = ${num * numero}<br>`)
    }
    
    result.innerHTML = tabuada
}