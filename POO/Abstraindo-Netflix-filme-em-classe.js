// ** Estrutura de uma classe em POO

class Filme {

    constructor() {
        this.titulo = '',
        this.ano = 0,
        this.genero = '',
        this.diretor = '',
        this.atores = [];
        this.duracao = 0

    }

    Reproduzir() {
        console.log("reproduzindo...");
    }

    Pauser() {
        console.log("Pausado ||");
    }

    Avançar() {
        console.log("Avançar >>");
    }

    Fechar() {
        console.log("Fechar X");
    }

}