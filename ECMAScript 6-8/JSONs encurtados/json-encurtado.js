var nome =  "Guilherme Libório";
var idade = 21;
var empresa = "Apple";

// ! Antigo porem funcional.
var jsonPadrao = {
    // Normalmente seria feito assim:
    nome: nome,
    idade: idade,
    empresa: empresa
}
console.log("MEU JSON PADRÃO ABAIXO: ")
console.log(jsonPadrao);


// ! Novo e também funcional.
var jsonReduzido = { // **  Isso só funciona com var, let e const, se tentar passar um valor em string e etc não vai funcionar!
    nome,
    idade,
    empresa,
}
console.log("MEU JSON REDUZIDO ABAIXO: ")
console.log(jsonReduzido);