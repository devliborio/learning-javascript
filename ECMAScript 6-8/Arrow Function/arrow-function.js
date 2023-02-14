// ! ENTENDENDO ARROW FUNCION!

// ** Basicamente uma arrow funcion funciona da mesma forma que uma função normal funcionaria
// Função padrão:
function padrao() {
    let euSouPadrao = true;

    if (euSouPadrao == false) {
        console.log("mentira ela é padrão sim");

    } else {
        console.log("sim, ela é padrão!");
    }
}

// ou

var padrao2 = function (a = 50, b = 20) {
    console.log("outra forma de criar funções: " + (a * b));
}

// ** Vamos entender como funciona o retorno em funções normais
function padrao3(x, y = 20) {
    return x / y;
}

// Saida:
padrao();
padrao2();
padrao3();

let resultadoDiv = padrao3(100);
console.log(resultadoDiv);


// Arrow Function:

//** Você basicamente só usa as arrow funcions em duas situações, quando você trabalha com callbacks ou quando você quer salvar esas função dentro de uma variavel!  */
let arrowFunc = (a = 93, b = 40, c = 42) => {
    console.log("Primeira forma de usar as Arrow Functions: " + (a * b * c));

}

// ** Outra situação que podemos usar uma arrow funcion é quando a presença de um só parâmetro onde não precisamos usar paretese para passar os parâmetros:
let arrowFunc2 = dia => {
    dia = "Segunda-feira!"
    console.log("Hoje é: " + dia);
}

// ** Mais uma forma é se sua função tiver só uma linha, tem como reduzi-la como irei mostrar agora:
let arrowFunc3 = (z = 4) => console.log(z * 2);

//** Agora vamos ver o retorno com as arrow functions 
// Forma padrão
let arrowFuncMedia = (a, b, c, d) => {
    return (a + b + c + d) / arrowFuncMedia.length
}

//Forma reduzida (caso tiver uma linha) você pode OMITIR o return
let arrowFuncMedia2 = (a, b, c) => (a + b + c) / arrowFuncMedia2.length

// Saida
arrowFunc();
arrowFunc2();
arrowFunc3();
console.log(arrowFuncMedia(9, 8, 6, 4));
console.log(arrowFuncMedia2(10, 5, 7));