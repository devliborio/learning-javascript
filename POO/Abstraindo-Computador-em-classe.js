class Computador {

    constructor() {

        // Atributos
            this.gabinete = '',
            this.memoria = '',
            this.processador = '',
            this.placa_de_video = '',
            this.fonte = '',
            this.placa_mae = '',
            this.armazenamento = '',
            this.cpu_cooler = ''
    }

    // Métodos
    Ligar() {
        console.log('Ligando...');
    }

    Reiniciar() {
        console.log('Reiniciando...');
    }

    Desligar() {
        console.log('Desligando...')
    }
}