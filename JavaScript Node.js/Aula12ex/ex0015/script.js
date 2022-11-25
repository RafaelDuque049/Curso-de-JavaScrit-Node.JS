function check(){
    const data = new Date().getFullYear()

    let ano = document.querySelector('.Ano_nascido').value

    let result = document.querySelector('.result')

    if (ano.length == 0 || ano > data){
        alert('//Erro//  Descrições incorretas, tente novamente.')
        
    } else {
        let img = document.createElement("img")
        
        let fsex = document.getElementsByName('sex_select')

        const genero = (fsex[0].checked ? 'Homem' : 'Mulher')

        const idade = (data - ano);

        img.setAttribute('id', 'foto')

        if (idade >= 0 && idade < 10){
            img.setAttribute('src', (genero == 'Homem' ? 'bebe_M.jpg' : 'bebe.jpg'))
        }

        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}