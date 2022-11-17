function eventos(msg, back, image){
    document.querySelector('.msg').innerHTML = msg

    document.body.style.background = back

    document.querySelector('.imagem').src = image
}

function time_page(){
    const text = document.querySelector('.time');

    let time_fixed = 0;

    setInterval(() => {
        const time_now = new Date();

        const time_hours = time_now.getHours();

        if (time_hours != time_fixed){
            time_fixed = time_hours

            if (time_hours < 6){
                eventos("Tenha uma boa madrugada!!", 'rgb(19, 1, 102)', 'images/madrugada.png')
    
            } else if (time_hours < 12){
                eventos("Tenha um ótimo dia!!", 'rgba(255, 180, 51, 0.798)', 'images/manha.png')
        
            } else if (time_hours < 18){
                eventos("Tenha uma ótima Tarde!!", 'rgb(255, 132, 10)', 'images/tarde.png')
        
            } else {
                eventos("Tenha uma boa noite!!", 'rgb(107, 107, 241)', 'images/noite.png')
            }
        };
    
        text.innerHTML = `Horário: ${time_now.getHours()}:${time_now.getMinutes()}:${time_now.getSeconds()}`;
    }, 500);
};