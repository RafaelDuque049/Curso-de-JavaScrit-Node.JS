// G = Global / Encontra todas as ocorrências e não a primeira encontrada.
// i = insensitive / Pode procurar as ocorrência tanto em maiusculo quanto em mínusculo.
// () = Criar grupos

const text = 
`joão trduxe flores para sua amada namorada em 10 de janeiro de 1970, Maria era o nome dela.

Foi um ano excelente na vida de João. Teve 5 filhos, todos adultos atualmente. 
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de 
domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso 
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooooooooo, o café tá prontinho aqui. Veeemm"!`;

const regExp = /João/g;

console.log(regExp.exec(text)) 

console.log(/João/i.exec(text)) // simplificado