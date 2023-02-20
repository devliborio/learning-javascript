// ! Entendendo Async / Await na programação async (Medida para solucionar as promises (hell / aninhada) ).

// ** O async / await é uma forma de se trabalhar com promises onde você não precisa trabalhar com then() e o catch() e com isso já podemos perceber que já resolve o problema do promise hell, só que nem sempre podemos usar o async/ await. ela é mais usada para receber dados de outra promise, por exemplo uma promise retorna uma lista de usuários do banco de dados, essa promise retorna uma lista, então nessa situação você usa async / await.

/* -------------------------------------------------------------------------------------------- */

function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var err = false;
            if (!err) {
                resolve([
                    { name: "Bill", lang: "C" },
                    { name: "Mark", lang: "JS" },
                    { name: "Steve", lang: "Cobol" }
                ]);
            } else {
                reject("Ocorreu um erro no processo, tente novamente!")
            }

        }, 3000);
    });
}

function pegarDados() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            var erro = false;
            var agente = {
                name: "Guilherme Libório Machado",
                idade: 21,
                empresa: "Microsoft"
            }

            if (!erro) {
                resolve(agente);
            } else {
                reject("Ocorreu um erro, que triste.");
            }

        }, 3000)

    })
}

/* -------------------------------------------------------------------------------------------- */

// ! Não é possivel pegar os dados de uma promisse dessa forma abaixo:
// var usuarios = pegarUsuarios();
// console.log(usuarios);
// ** Perceba que eu executar isso console simulando um atraso de 3 segundos para pegar esses usuários ele retorna que a promise está pendente, e não sairá disso.

/* -------------------------------------------------------------------------------------------- */

// ** O modelo padrão de pegar os dados de uma promise é usar o then(), assim por exemplo:

// pegarUsuarios().then((usuarios) => { 
//    console.log(usuarios);
// });

//** Entretanto é exatamente isso que gera o promise hell, pois pegamos um dado, passamos pra outra promise e passamos pra outra e assim vái, até ficar realmente um hell. */

/* -------------------------------------------------------------------------------------------- */

// ! Para evitar a situação acima de promises aninhadas e confusas podemos usar o AWAIT!
// ** O await significa esperar, esperar uma promise!

async function principal() {

    try {
        var usuarios = await pegarUsuarios(); // Aqui ele diz "Oh javascript, eu quero que você espere a promise carregar eme retorne, você pode usar tanto sem atribuir esse retorno a uma variável como também pode atribuir, nesse exemplo irei atribuir!" OBS: essa linha de código é exatamente a mesma coisa que o código que vimos acima do modelo padrão.
        console.log(usuarios);
    } catch (erro) {
        console.log(erro);
    }


    // ** Parece ser mil maravilhas usar o await e async porem ele meio que bloqueia o fluxo do seu program, então por exemplo não é tão recomendado usar ele em um envio de e-mail. Então basicamente async / await é uma maneira de você escrever código assíncrono com o estilo síncrono.
}

// Output
principal();

/* -------------------------------------------------------------------------------------------- */

// ! TRATATIVAS DE ERRO COM ASYNC / AWAIT

// ** Para travar erros com eles você vai usar o ( try{ ..logica }catch(erro){ ...deu erro } )
async function main() {

    try {
        var user = await pegarDados();
        console.log(user);

    } catch (erro) {
        console.log(erro);

    }
}

main()