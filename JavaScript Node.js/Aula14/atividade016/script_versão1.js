function contar() {
    let contagem = [];

    let msg = document.querySelector('#resultado')
    
    let começo = Number(document.querySelector('#inicio').value)

    const final = Number(document.querySelector('#final').value)

    const passo = Number(document.querySelector('#passo').value)

    contagem.push(começo)

    if (começo + final == 0) {
        return msg.innerHTML = 'Impossível contar'
    } else if (passo == 0) {
        return alert('Passo inválido! (Os passos são contados apartir do "1").')
    }

    if (começo < final) {
        while (começo <= final) {
            começo += passo
            contagem.push(começo)
        }
    } else {
        while (começo >= final) {
            começo -= passo
            contagem.push(começo)
        }
    }

    msg.innerHTML = `${contagem.join(' &#x1F449; ')}&#x1F3C1;`
}