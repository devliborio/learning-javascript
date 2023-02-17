// ** Estrutura de uma classe em POO

class Jogo{

    // Atributos
    constructor(){
        this.titulo="Elden ring",
        this.genero = "Souls like",
        this.produtora = "From Software",
        this.preco = "R$ 249,00"
    }

    // Métodos
    Abrir(){
        console.log("Jogo abrindo")
    }

    Carregar(){
        console.log("Carregando...")
    }

    Fechar(){
        console.log("Aperte ESC para fechar...")
    }
}