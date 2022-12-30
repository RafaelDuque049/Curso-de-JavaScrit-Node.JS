/* Um Objeto JSON, suporta váriadas formas de dados, como: 
    {
        "inteiro": 12,
        "flutuante": 34.1,
        "string": "JSON",
        "Array": [463, "Aprendendo", "462", true],
        "boleano": true,
        "bibliotecas": {
            "Objeto1": "Lápis",
            "Objetos": {
                "Objeto_1": "Caneta",
                "Objeto_2": "Folha"
            }
        }
    }
 */


// É possível manter dois pacotes de informação em um JSON usando Array, dá seguinte fomra:
const objeto = [{
    "nome": "Matheus",
    "idade": 45,
    "esta_trabalhando": true,
    "detalhes_profissao": {
        "profissao": "Programador",
        "empresa": "Empresa X"
    },
    "hobbies": ["Programar", "Academia", "ciclismo"]
}, 
{                             
    "nome": "Julio",
    "idade": 63,
    "esta_trabalhando": true,
    "detalhes_profissao": {
        "profissao": "Designer",
        "empresa": "Empresa X"
    },
    "hobbies": ["Desenhar", "correr", "cozinhar"]
    }
]


// JSON
// Converte o objeto para JSON
const jsonData = JSON.stringify(objeto)

console.log(jsonData)

console.log(typeof jsonData)

// CONVERTE JSON PARA OBEJTO
const ObjetoJSON = JSON.parse(jsonData)

console.log(ObjetoJSON)

console.log(typeof ObjetoJSON)

const pessoas = () => {
    ObjetoJSON.forEach(element => { 
        console.log(element.nome)
    });
}

pessoas()