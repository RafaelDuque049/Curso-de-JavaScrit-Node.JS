let lista_valor = [];

let Element_selected = null;

let selected = document.querySelector('#lista_numeros');

const selecionado = function () {
    Element_selected = {
        id: selected.options[selected.selectedIndex].id,
        value: selected.options[selected.selectedIndex].value
    };
};


function adicionar() {
    let lista = document.querySelector('#lista_numeros');
    
    let new_element = document.createElement('option');
    
    const numero = Number(document.querySelector('#numero').value);
    
    if (numero.length == 0) {
        return alert('É preciso digitar um número para ser adicionado.\n[Tente Novamente]')
    } 
    else if (lista_valor.indexOf(numero) != -1) {
        return alert('O valor repassado já foi adicionado a lista.')
    } 
    else if (numero > 100 || numero < 1) {
        return alert('Para um valor ser adicionado, ele deve estar entre 1 e 100.\n[Tente Novamente]')
    };
        
    document.querySelector('.resultados').innerHTML = 'Informações';

    new_element.id = 'Element_'+numero;

    new_element.value = numero;
    
    new_element.innerHTML = `Valor ${numero} adicionado.`;
    
    lista_valor.push(numero)
    
    lista.appendChild(new_element)
};

function finalizar() {
    if (lista_valor.length == 0) {
        return alert('Adicione valores antes de finalizar.\n[Tente Novamente]')
    };
    
    const sum = (num) => {
        let soma = 0;
        
        num.forEach((Number) => (soma += Number))
        
        return soma
    };
    
    const add_text = (mensagens) => {
        let result = document.querySelector('.resultados');
        
        mensagens.forEach((String) => {
            let new_element = document.createElement('p');
            
            new_element.innerHTML = String;
            
            result.appendChild(new_element)
        });
    };
    
    document.querySelector('.resultados').innerHTML = null;
    
    let mensag = [
        `Ao todo, temos ${lista_valor.length} números cadastrados.`,
        `O maior valor informado foi ${Math.max(...lista_valor)}.`,
        `O menor valor foi ${Math.min(...lista_valor)}.`,
        `Somando todos os valores, temos ${sum(lista_valor)}.`,
        `A média de dos valores digitados é ${(sum(lista_valor)/lista_valor.length).toFixed(3).replace('.', ',')}.`
    ];
    
    add_text(mensag)
};

function Zerar_lista() {
    if (lista_valor.length == 0) {
        return alert('É necessário haver números salvos na lista para realizar a limpeza.')
    };
    
    const deletar = function() {
        let reset = document.createElement('option'), salvar = document.querySelector('select')
        
        lista_valor = [];
        
        document.querySelector('.resultados').innerHTML = 'Informações';
        
        reset.disabled = true, reset.innerHTML = 'Insira um valor acima &#x2B06;&#xFE0F;';
        
        salvar.innerHTML = null;
        
        salvar.appendChild(reset)
    };
    
    const continuar = confirm('Deseja mesmo deletar todos os itens da lista?')
    
    if (continuar == true) {
        deletar()
    };
};

function deletar() {
    if (lista_valor.length == 0) {
        return alert('É necessário ter itens selecionaveis na lista para deletar.')
    };
    
    try {
        const option_element = document.querySelector(`#${Element_selected.id}`);
        
        lista_valor = lista_valor.filter(item => item != Element_selected.value);
        
        Element_selected = null;

        selected.removeChild(option_element);
    }
    catch {
        return alert('É necessário selecionar um item para ser deletado')
    };

    document.querySelector('.resultados').innerHTML = 'informações';
};