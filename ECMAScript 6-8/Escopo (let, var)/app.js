// ! ENTENDENDO ESCOPO VAR!

// ** VAR SÓ TEM DOIS ESCOPOS -> GLOBAL E LOCAL!

var nome = "Guilherme Libório"; // ** Escopo Global, pois conseguimos usar em qualquer lugar do arquivo, como mostrado no exemplo abaixo, tanto dentro das funçõs quanto fora.

console.log("Escopo Global por " + nome); // ** Chamando fora das funções.

function varFunc() {
    var sobrenome = "Machado"; // ** Escopo local, já que ela foi declara internamente na função, somente ela pode usar.
    console.log("Usando var que foi definida como global por " + nome);
    console.log("Usando o escopo global e local definido por " + nome + " " + sobrenome);

}

function varFunc2() {
    console.log("Função 2 usando escopo global por " + nome  /*sobrenome*/); // ** Isso retorna um erro pois a variavel sobrenome está definida somente e localmente para a função 1. 
}

// ** Chamando funções.
varFunc();
varFunc2();

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! ENTENDENDO ESCOPO LET!

// ** LET TAMBÉM TEM ESSES DOIS ESCOPOS CITADOS A CIMA -> GLOBAL E LOCAL POREM TEMOS MAIS UM QUE A TORNA DIFERENTE DA VAR QUE É O ESCOPO DE BLOCO!

let objeto = "Machado";  // Escopo Global.

console.log("Usando let no escopo global com " + objeto);

function letFunc() {
    let lamina = "serrada" // Escopo Local.
    console.log("Usando let no escopo global e local com " + objeto + " com lamina " + lamina)
}

// ** Chamando função.
letFunc();

// ** Agora vamos entender melhor o escopo de bloco.

// Bloco no javascript é qualquer coisa que começe com ' { } '  vamos entender nesse exemplo:

let a = 10;
let testar = true; // Declarando let globalmente.

if (testar = true) { // ** Exemplo de bloco

    let b = 20 // Declarando let dentro de um bloco, declarando dentro de um bloco somente o bloco consegue enxergar, ao tentar usar ele fora do bloco ele se torna indefinido automaticamente!
    console.log("A soma é " + (a + b));

}