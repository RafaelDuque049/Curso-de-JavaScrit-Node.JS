// Teste de funcionalides aprendidas nas aulas e pesquisas.

function clicked(){
    let box = document.querySelector('div.box')
    
    box.style.background = 'orange', box.innerHTML = 'Clicado'

    setTimeout(() => {
        box.style.background = 'white';
        box.innerHTML = 'Clique Aqui'
    }, 1500);
};

setInterval(() => {
    const time = new Date()

    const timer_mod = document.querySelector('.time');

    const hora = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    
    timer_mod.innerHTML = `Dia: ${time.getDate()} <br> Horário: ${hora}`
}, 500);