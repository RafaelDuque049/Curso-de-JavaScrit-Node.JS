
function time_page() {
    function eventos(msg, back, image) {
        document.querySelector('.msg').innerHTML = msg
    
        document.body.style.background = back
    
        document.querySelector('.imagem').src = image
    }

    const text = document.querySelector('.time');

    let time_fixed = null;

    setInterval(() => {
        const time_now = new Date();

        const time_hours = time_now.getHours();

        if (time_hours != time_fixed) {
            if (time_hours < 6) {
                eventos("Tenha uma boa madrugada!!", 'rgb(19, 1, 102)', 'images/madrugada.png')

                document.querySelector('#box_itens').style.boxShadow = '5px 5px 10px rgb(204 0 255 / 71%)'
                
            } else if (time_hours < 12){
                eventos("Tenha um ótimo dia!!", 'rgba(255, 180, 51, 0.798)', 'images/manha.png')

                document.querySelector('#box_itens').style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.713)'
                
            } else if (time_hours < 18){
                eventos("Tenha uma ótima Tarde!!", 'rgb(255, 132, 10)', 'images/tarde.png')
                
            } else {
                eventos("Tenha uma boa noite!!", 'rgb(107, 107, 241)', 'images/noite.png')
            }
            
            document.querySelector('.dia').innerHTML = `Dia ${time_now.getDate()}`

            time_fixed = time_hours
        };
        text.innerHTML = `Horário: ${time_now.getHours()}:${time_now.getMinutes()}:${time_now.getSeconds()}`;
    }, 500);
};