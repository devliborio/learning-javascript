// ! Entendendo como trabalhar com Programação Async com callbacks

// Vamos utilizar o setTimeout para simular um tempo de espera pois vamos trabalhar com simulações de envio de emails 

function enviarEmail(corpo, para) {
    setTimeout(() => {
        console.log(`
        
        Para: ${para}
        ----------------------------------------

        Mensagem: ${corpo}

        ----------------------------------------
        De: Guilherme Libório Machado

        `)
    }, 8000)
}

// Veja como bem todos os consoles foram enviados antes da função enviarEmail() ter sua saida computada, isso é programação async, pois um passo não bloqueia o outro.
console.log("Inicio do envio de e-mail");
enviarEmail("Oi seja bem vindo a UserHelp", "liborio.ofc@gmail.com");
console.log("Seu e-mail foi enviado deve chegar em minutos")
console.log("TUDO OK!")