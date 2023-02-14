// JSON
let setup = {
    mousepad: "Redragon",
    mouse: "Logitech",
    monitor: "Acer", 
    processador: "i5 - 4590"
}

// ! Jeito anti-pratico
let mousepad = setup.mousepad;

// Saida
console.log("meu mousepad é da: " + mousepad);


// ! Forma mais produtiva de fazer o mesmo que o exemplo acima 👆 usando a desestruturação

// ** Estrutura do operador de desestruturação
let { mouse, monitor, processador } = setup; // ele basicamente transforma um campo dentro do objeto json em uma variavel, um grande pulo no gato é o fato de você poder definir varias variaveis de uma vez só!

// Saidas
console.log("meu mouse é da: " + mouse);
console.log("meu monitor é um: " + monitor);
console.log("meu processador é um " + processador);