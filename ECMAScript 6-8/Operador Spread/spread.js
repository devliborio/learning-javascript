// ! ENTENDEDNDO O OPERADOR SPREAD

let marca = 'bmw';
let modelo = 'sedã ';
let valor = 300000;

let empresa = {
    nome: "Liborio's automoveis",
    cidade: 'Salvador',
    site: "http://204.48.25.5/",
    email: "email@teste.com"
}

let carro = {
    marca: marca,
    modelo: modelo,
    valor: valor,

    // ! Pegando dados de um outro objeto da meneira antiga
    nomeDaEmpresa: empresa.nome,
    cidadeDaEmpresa: empresa.cidade,
    emailDaEmpresa: empresa.email,
    siteDaEmpresa: empresa.site
}
console.log(carro)



// ! Pegando dados de um outro objeto de uma maneira mais produtiva com o operador spread!
// ** O operador spread serve para pegar campos de um objeto copiar esses campos e colar em outro objeto.

let carroNovo = {
    marca,
    modelo,
    valor,
    
    // ** O operador spread é representado pelos 3 pontos
    ...empresa // Ele diz que quer copiar os campos do objeto empresa e colar no objeto carro novo  !
}
console.log(carroNovo);