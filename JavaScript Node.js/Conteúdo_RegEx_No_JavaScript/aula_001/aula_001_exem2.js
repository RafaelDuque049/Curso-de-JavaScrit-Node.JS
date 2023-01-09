// G = Global / Encontra todas as ocorrências e não a primeira encontrada.
// i = insensitive / Pode procurar as ocorrência tanto em maiusculo quanto em mínusculo.
// () = Criar grupos
// | = ou

const text = 
`joão trduxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela.

Foi um ano excelente na vida de João. Teve 5 filhos, todos adultos atualmente. 
luiz, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de 
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso 
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooooooooo, o café tá prontinho aqui. Veeemm"!`;

const regExp = /(pão)( de queijo)./ig;

const found = regExp.exec(text)

console.log(found[0])
console.log(found[1])
console.log(found[2])

console.log()

const found2 = /(maria|João|luiz)(, hoje sua esposa)./g.exec(text);           

if (found2) {
    console.log(found2[0])
}