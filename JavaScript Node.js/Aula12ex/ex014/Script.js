function eventos(msg, back, image){
    document.querySelector('.msg').innerHTML = msg

    document.body.style.background = back

    document.querySelector('.imagem').src = image
}

let text = document.querySelector('.time');

function time_page(){
    setInterval(() => {
        let time_now = new Date();
    
        if (time_now.getHours() < 6){
            eventos("Tenha uma boa madrugada!!", 'rgb(19, 1, 102)', 'images/madrugada.jpg')
    
        } else if (time_now.getHours() < 12){
            eventos("Tenha um ótimo dia!!", 'rgba(255, 180, 51, 0.798)', 'images/manha.jpg')
    
        } else if (time_now.getHours() < 18){
            eventos("Tenha uma ótima Tarde!!", 'rgb(255, 132, 10)', 'images/tarde.jpg')
    
        } else {
            eventos("Tenha uma boa noite!!", 'rgb(107, 107, 241)', 'images/noite.jpg')
        }
        text.innerHTML = `Horário: ${time_now.getHours()}:${time_now.getMinutes()}:${time_now.getSeconds()}`
    }, 500);
}