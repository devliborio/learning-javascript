// ! Entendendo Herança em Programação orientada a objeto

//** A herança tem o mesmo intuito da composição que é a reutilização de códigos, basicamente funciona da seguinte forma: */ 

class Animal { // Classe mãe!

    // Atributos
    constructor(nome, idade, preco) {
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    // Métodos
    Comprar() {
        console.log('Comprando animal');
    }

    ChecarEstoque() {
        return 10;
    }

    Devolver() {
        console.log('O animal foi devolvido');
    }
}

class Cachorro extends Animal { // Usando herança pra herdar métodos e atributos da classe mãe!

    constructor(nome, idade, preco, raca, peso) { // Reutilizando os códigos do construtor da classe mãe!
        super(nome, idade, preco); // Reutilizando da classe mãe!
        
        // Atributos especificos pro cachorro! Lembrando que isso só se aplica ao cachorro!
        this.raca = raca;
        this.peso = peso;   
    }


    Latir() { // Só pertence ao cachorro!
        console.log('ROLF! ROLF!');
    }


    ChecarEstoque() {
        console.log('Na loja temos 20 cachorros "ben" ');
    }

    Devolver() {
        console.log('Aqui é uma classe de DOG!');
        super.Devolver(); // O 'super' faz referencia a classe mã, e basicamente ele pega o coportamento do método Devolver(); da classe mãe!
        console.log('Aqui vem funcionalidade nova!');
    }
}
// Output - Cachorro
let dog = new Cachorro("Ben", 12, 350, 'Golden', 2+'kg');
dog.ChecarEstoque();
dog.Latir();
dog.Devolver(); 
console.log(dog.peso);
console.log(dog.raca);