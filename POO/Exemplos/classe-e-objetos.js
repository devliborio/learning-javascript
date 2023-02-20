// Classe!
class Filme {

    constructor(nome, genero, ano, diretor) {
        this.name = nome,
            this.gênero = genero,
            this.ano = ano,
            this.diretor = diretor,
            this.atores = []
    }

    Reproduzir() {
        console.log('Reproduzindo...')
    }

    Pausar() {
        console.log('Pausando!');
    }

    Avançar() {
        console.log('Avançando!');
    }

    Fechar() {
        console.log('Fechando!');
    }

    Ficha() {
        console.log('Titulo do filme: ' + this.name);
        console.log('Genero do Filme: ' + this.gênero);
        console.log('Ano de lançamento: ' + this.ano);
        console.log('Diretor do filem: ' + this.diretor);
    }
}


//** Objetos!

var vingadores = new Filme(); // Fazendo isso estamos criando uma copia dessa classe na memoria ram do computador, e essa copia está armazenada dentro da variável vingadores.

// ! Quando instanciamos uma classe em uma variável, automaticamente através dela podemos acessar os atributos e métodos da classe, como nesse exemplo abaixo:
vingadores.Reproduzir(); // Perceba que ao acessar esse método ele retorna no console a ação que definimos para ele.

/* --------------------------------------------------------------------------------------------------------------- */

// ! Definindo Atributos de uma objeto
var harryPotter = new Filme();

// Definindo valores para os atributos
harryPotter.name = 'Harry Potter e a pedra filosofal';
harryPotter.gênero = 'Aventura';
harryPotter.ano = 2001;
harryPotter.atores = ['Daniel', ' Emma watson', ' Rupert Grint'];
harryPotter.diretor = 'Chris Columbusucas';

// Output
console.log('Titulo do filme: ' + harryPotter.name);
console.log('Gênero: ' + harryPotter.gênero);
console.log('Ano: ' + harryPotter.ano);
console.log('Atores: ' + harryPotter.atores);
console.log('Diretor: ' + harryPotter.diretor);

/* --------------------------------------------------------------------------------------------------------------- */

// ! Outra forma de definir valores para um atributo atravês dos parametros do constructor
var homenAranha = new Filme('Homen-Aranha - Longe de casa', 'Aventura', 2019, 'Jon Watts');

// Output
console.log(' ')
homenAranha.Ficha(); // Forma mais limpa de retornar os atributos 

// console.log('Titulo do filme: ' + homenAranha.name);
// console.log('Genero do filme: ' + homenAranha.gênero);
// console.log('Ano de lançamento: ' + homenAranha.ano);
// console.log('Dirtor do filme: ' + homenAranha.diretor);

/* --------------------------------------------------------------------------------------------------------------- */

// ! Métodos estaticos

class Calculadora {

    static soma(n1, n2) {
        console.log(n1 + n2);
    }

    static subtracao(n1, n2) {
        console.log(n1 - n2);
    }
}

//** Uma das formas de trabalhar com os métodos (que nem sempre é tão viavel)
var calc = new Calculadora();

/* Normal Output

console.log(' ')
calc.soma(2, 3);
calc.subtracao(3, 2);

*/


// ** Forma mais simples e dependendo dos casos mais viavel

//Static Output
console.log(' ');
Calculadora.soma(50, 90);
Calculadora.subtracao(100, 70);