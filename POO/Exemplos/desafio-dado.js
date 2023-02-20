class Dado {
    constructor(faces) {
        // Atributos
        this.faces = faces;
    }

    // Métodos
    Rolar() {
        console.log('Resultado do dado ' + this.GetRandomIntInclusive(1,this.faces));
    }

    // Função de gerar número aleatorios
    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

let d6 = new Dado(6);
let d12 = new Dado(12);
let d100 = new Dado(100);
let d200 = new Dado(200);

//Output
d6.Rolar();
d12.Rolar();
d100.Rolar();
d200.Rolar();