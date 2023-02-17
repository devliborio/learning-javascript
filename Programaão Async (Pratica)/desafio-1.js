// ! Convertendo Promise Hell em Async / Await!


function pegarId() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(5);

        }, 1500);
    });
}

function buscarNoBanco(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("liborio.ofc@gmail.com.br");

        }, 2000);
    });
}

function enviarMaisUmEmail(corpo, para) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            var err = false;

            if (!err) {
                resolve(console.log(`

                Corpo: ${corpo}
                Para:  ${para}

                `));

            } else {
                reject("Email não foi enviado!")
            }

        }, 3000);
    });
}

async function mainFunction() {

    let id = await pegarId();
    let email = await buscarNoBanco(id);
    enviarMaisUmEmail("Esse é o corpo do email!!!", email).then(() => {
        console.log(`Email enviado para o usuario do id: ${id}`);

    }).catch((err) => { console.log(err) })

}

// Output
mainFunction();





/* pegarId().then((id) => {

    buscarNoBanco(id).then((email) => {
        enviarMaisUmEmail("Esse é o corpo do email!!!", email).then(() => {

            console.log(`Email enviado para usuario com id: ${id}`);

        });
    });
});

*/