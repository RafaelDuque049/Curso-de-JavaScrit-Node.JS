// Verificador de idade e sexo.

function check(){
    let ano = document.querySelector('.Ano_nascido').value

    let result = document.querySelector('.result')

    const data = new Date().getFullYear()

    const idade = (data - ano)

    if (ano.length == 0 || ano > data || idade > 125) {
        return alert('//Erro//  Descrições incorretas, tente novamente.')
        
    } else {
        let img = document.createElement("img")
        
        const fsex = document.getElementsByName('sex_select')
        
        const genero = (fsex[0].checked ? 'Homem' : 'Mulher')
        
        img.setAttribute('id', 'foto')

        if (idade >= 0 && idade <= 10) {
            img.setAttribute('src', (genero == 'Homem' ? 'images/bebe_M.jpg' : 'images/bebe.jpg'))
        
        } else if (idade <= 21) {
            img.setAttribute('src', (genero == 'Homem' ? 'images/jovem_M.jpg' : 'images/jovem_F.jpg'))
        
        } else if (idade <= 50) {
            img.setAttribute('src', (genero == 'Homem' ? 'images/homem.jpg' : 'images/mulher.jpg'))
        
        } else {
            img.setAttribute('src', (genero == 'Homem' ? 'images/idoso.jpg' : 'images/idosa.jpg'))
        };

        result.style.textAlign = 'center';
        
        result.innerHTML = `Detectamos ${genero} com ${idade} anos`;

        result.appendChild(img);
    };
};