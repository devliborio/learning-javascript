class MensagemWpp {

    constructor() {

        //Atributos
        this.status = "enviada";
        this.usuário = "Guilherme";
        this.vistoPorUltimo = "horário!";
        this.conteúdoDaMensagem = "....";
        this.tipo = ['texto', 'figurinha', 'emoticon'];
    };

    enviar() {
        console.log('enviando');
    }

    ler() {
        console.log('lendo');
    }

    excluir() {
        console.log('excluindo');
    }

    selecionar() {
        console.log('selecionando');
    }
}