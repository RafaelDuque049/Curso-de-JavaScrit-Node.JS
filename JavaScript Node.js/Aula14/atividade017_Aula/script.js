function gerar_tabuada() {
    const numero = document.querySelector('#numero').value

    let selecionar = document.querySelector('#selecionar')

    if (numero.length == 0) {
        return alert('É preciso preencher o espaço para calcular a tabuada\n[Tente Novamente]')
    }

    selecionar.innerHTML = null;

    for (var num = 1 ; num <= 10 ; num++) {
        let new_element = document.createElement('option')

        new_element.value = "valor"+num // Uso necessário apenas para a parte do PHP.
        
        new_element.innerHTML = `${num} x ${numero} = ${num * numero}`

        selecionar.appendChild(new_element)
    }
}