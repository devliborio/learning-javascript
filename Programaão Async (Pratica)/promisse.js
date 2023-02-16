// ! Vamos entender o que é uma promise na programação async

/*    Promise nada mais é do que uma evolução do callback, de uma forma mais sofisticada algo mais "gourmet", observe que promise significa "promessa" em português então siginfica que estamos prometendo algo,e  essa promessa pode ser cumprida ou não. Veja esse exemplo abaixo como demonstração de uma promise:

                envioDeEmail -> Resolve: "Ok!" - Reject: "Falhou!"  
    
    - Basicamente prometemos que vamos enviar o email, mas não damos 100% de certeza que vamos cumprir, então podem ter dois resultados: Resolve: "Ok" || Reject: "falhou"

*/

// ** Agora vamos fazer um teste real simulando um envio de email (fake) usando setTimeout()!

function enviarEmail(corpo, para) { // Diferente do callback, com o promise não precisamos passar um 3 parâmetro.

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            var deuErro = true;

            if (!deuErro) {
                resolve(); // ! PROMESSA OK! TRATADA PELO -> THEN()

            } else {
                reject(); // ! FOI MAL A PROMESSA FALHOU! - TRATADA PELO -> CATCH()

            }

        }, 4000);

    }); // Basicmanete serve para assim que chamarmos a função ela represente o seguinte dialogo enviarEmmail() -> "eu prometo que...." ou seja assim a função que contem o return new promise() é chamada ela já promete alguma coisa que vai estar no corpo da promise.
}

// Output
/* enviarEmail("Ola mundo", "paraqualquerpessoa@ai.com").then(() => { // O método then() é equivalente a um callback, detalhe que o then() só é chamado se a promise for cuprida, se ela n for não irá chamar o then() NUNCA!

    console.log("opa você conseguiu fazer o que me prometeu");

}).catch(() => { // Um detalhe muito importante é que se a promisse foi feita tem o then() para retornar algo, agora e se a promise falhar? bom usamos o catch para tratar desse erro, assim como temos um retorno que deu tudo certo com o then() temos um retorno se falhar com o catch()

    console.log("Que pena não deu para fazer o que você me prometeu");
}); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! Vamos entender como trabalhar com parâmetros na promisse

function enviarOutroEmail(corpo, para) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            var error = false;

            if (error == false) {
                resolve({time: 5, to: "sophiaventin@gmail.com", setor: "inteligencia", corpo: "Oi esse email é urgente, corra pra minha sala!"}); // ** Na promise os parâmetros são diferentes dos callbacks, aqui no caso podemos passar apenas 1 parâmetro, mas COMO VAMOS PASSAR VARIOS DADOS SE QUISERMOS? Bom use o json que isso solucionará seus problemas, como eu fiz nesse exemplo!

            } else {
                reject({error: "Deu um erro feiao!"});

            }

        }, 4000);
    });
}

// Output
enviarOutroEmail("Oi esse é outro email.").then((json) => {

    console.log(`
    
    Corpo: ${json.corpo}
    Para: ${json.to}


    Email enviado com sucesso!
    `);

}).catch((reject) => {

    console.log(reject.error);

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! PROMISES ANINHADAS E PROMISE HELL