class PlayerDeVideo{

    constructor(){
        // Atributos
        this.barraDeProgresso = 'slide',
        this.botãoIniciar = 'Play',
        this.botãoAvançar = 'Next'
    }

    // Métodos

    Iniciar(){
        console.log("Iniciando video... (>) ");
    }

    Pausar(){
        console.log("Pausando video... || ");
    }

    Avançar(){
        console.log("Avançando video... >>> ")
    }
}