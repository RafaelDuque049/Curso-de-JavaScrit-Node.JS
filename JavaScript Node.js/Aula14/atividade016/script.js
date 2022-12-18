function contar() {
    let msg = String()

    let resultado = document.querySelector('#resultado')

    let inicio = Number(document.querySelector('#inicio').value)

    const final = Number(document.querySelector('#final').value)

    const passo = Number(document.querySelector('#passo').value)

    if (inicio + final == 0) {
        return resultado.innerHTML = 'Impossível calcular'
    
    } else if (passo == 0) {
        return alert('Passo inválido! (Os passos contam apartir de "1").')
    }

    if (inicio < final) {
        while (inicio <= final) {
            msg += `${inicio} &#x1F449;`
            inicio += passo
        }
    } else {
        while (inicio >= final) {
            msg += `${inicio} &#x1F449;`
            inicio -= passo
        }
    }

    console.log(msg)
    resultado.innerHTML = `${msg} &#x1F3C1;`
}