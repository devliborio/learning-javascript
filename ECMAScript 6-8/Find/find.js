//! ENTENDENDO O MÉTODO FIND()

let agente47 = {
    nome: "Guilherme Libório",
    setor: "espião",
    classe: "S+"
} //** Verificar(); => true

let agente01 = {
    nome: "Sophia Ventin",
    setor: "inteligencia",
    classe: "A++"
} //** Verificar(); => false

let agente007 = {
    nome: "Ghost",
    setor: "desconhecido",
    classe: "S++",
} //** Verificar(); => false

let agenteX = {
    nome: "baltazar yulif",
    setor: "espião",
    classe: "desconhecido"
}


let classeA = [agente47, agente01, agente007, agenteX];

// O método find trabalha com uma arrow function de uma linha que retorna verdadeiro ou falso dependendo da condição.
let usuarioChave = classeA.find(agente => agente.nome == "baltazar yulif"); //**  Verificar(); 
// No primeiro usuario que ele verificar e for verdadeiro ele vai pegar e retornar pra você.

// Saida
console.log(usuarioChave);
