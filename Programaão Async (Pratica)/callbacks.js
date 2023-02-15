// ! Vamos entender como funciona o CallBack na programação async

function sendEmail(msg, to, callback) {
    setTimeout(() => {
        console.log(`

        Para: ${to}

        -------------------------------------

        Mensagem: ${msg}

        -------------------------------------

        De: Guilherme Libório Machado

        `)

        callback(); // Esse terceiro paramêtro basicamente é uma função que ao ser chamada no output pode incluir tudo o que você quer que seja executado depois do "envio" do e-mail por exemplo.
    }, 3000);
}

// Output

console.log("Seu e-mail está sendo enviado, deve chegar em alguns segundos!");
sendEmail("Olá só estou fazendo um teste de callback com programaçao async", "usuarioteste@gmail.com", () => {

    console.log("Email enviado, verifique a caixa de entrada!");

}); // percecba que aqui eu defino o callback como o terceiro parâmetro logo, tudo que estiver dentro dessa função sera executado depois do "envio" do e-email


// ** //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! Parâmetros em CallBacks

function sendEmail2(msg2, to2, creator, callback2,) {
    setTimeout(() => {

        console.log(`

        Para: ${to2}

        -------------------------------------

        Mensagem: ${msg2}

        -------------------------------------
        De: ${creator}

        `)

        callback2("OK", 5, "4s"); // Passando parâmetros no callback

    }, 4000);
}

// Output
console.log("Inicio do teste");
sendEmail2("Usando parâmetros no callback", "callback@teste.com", "gui", (status, amount, time, nome) => {

    nome = "devsupremo"

    console.log("Teste com parâmetros feito!")

    console.log(`

    - Status do envio: ${status}
    - Quantas pessoas receberam o email: ${amount} pessoas
    - Qual foi o tempo de envio: ${time}

    Feito por: ${nome}

    `);

}); // Então deu pra entender que conseguimos passar parãmetros dinamicamente direto de uma função async para o callback.



// ** //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! Tratamento de erros com callback e programação async

function errorTest(msgTeste, agencia, callback) {

    setTimeout(() => {

        // ....... logica


        // Tratamento de erro parte 1
        var seError = false;

        if (seError == true) {
            callback(3, "O envio da mensagem falhou!!");

        } else {
            callback(3);
        }

    }, 3000);
}


// output
console.log("Inicio do teste");
errorTest("mensagem do teste enviada!", "desenvolvimento", (time, erro) => {

    // Tratamento de erro parte 2
    if (erro == undefined) {
        console.log(`Teste concluido, tempo de execução: ${time}s`);
    } else {
        console.log(`Ocorreu um erro: ${erro}, tempo de execução: ${time}`);
    }

});