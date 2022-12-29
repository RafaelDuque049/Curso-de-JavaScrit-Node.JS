// Teste de funcionalides aprendidas nas aulas e pesquisas.
function create_box() {
    const new_box = document.createElement('div')

    new_box.setAttribute('class', 'box2')

    new_box.setAttribute('onclick', 'clicked("box2")')

    document.body.appendChild(new_box)

    document.querySelector('.box2').innerHTML = '<strong>Clique Aqui</strong>'
}

function clicked(button){
    let box = document.querySelector(`.`+button)
    
    box.style.background = 'orange', box.innerHTML = 'Clicado'
    
    if (create) {
        create_box()

        create = false
    };

    setTimeout(() => {
        box.style.background = 'white', box.innerHTML = 'Clique Aqui';
    }, 1500);
};

let create = true;

setInterval(() => {
    const time = new Date()
    
    const timer_mod = document.querySelector('.time');
    
    const hora = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    
    timer_mod.innerHTML = `Dia: ${time.getDate()} <br> Horário: ${hora}`
}, 500);