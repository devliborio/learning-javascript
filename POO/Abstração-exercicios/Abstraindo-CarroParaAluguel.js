class CarroParaAluguel{

    constructor(){
        //Atributos
        this.preço = 'R$2.000 por dia',
        this.prazo = '30 dias',
        this.marca = 'Bmw',
        this.ano = 2019,
        this.modelo = 'SUV'
        this.condição= 'Zero'
    }
    
    //Métodos
    alugar(){
        console.log('alugando');
    }

    devolver(){
        console.log('devolvendo');
    }

    ligar() { 
        console.log('ligando carro');
    }

    desligar() { 
        console.log('desligando carro');
    }

    acelerar(){
        console.log('acelerando');
    }   

    freiar(){
        console.log('freiando');
    }
}