// Eu
let nome = "Guilherme Libório Machado";
let sobre = "Desenvolvedor Full Stack";

//Better i'm better 
let tL = "Template Literals";
let better = "MELHOR!!";

// Concatenação de uma maneira muito manual e anti-pratica
let frase = "Olá meu nome é " + nome + " e eu sou " + sobre + ".";
console.log(frase);

console.log(" ");

// Forma mais pratica e totalmente melhor
let frase2 = `Oi eu sou o ${tL} e sou MUITO ${better}`;
console.log(frase2);

console.log(" ")

let frase3 = `Oi eu também tenho suporte a quebras de linha veja só: 

oi

eu 

sou

melhor
`
console.log(frase3);
//** Usamos a interpolação que nada mais é do que enfiar a variavel dentro da string! */