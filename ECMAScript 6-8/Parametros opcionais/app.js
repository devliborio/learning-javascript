// ! ENTENDENDO PARAMETROS OPCIONAIS

function soma(a, b = 50) { // Ao você definir um valor a uma parâmetro ele se torna automaticamente opnicional de ser passado na chamada da função, pois ele já tem valor definido. 

    // ! OBS: NUNCA COLOQUE OS PARAMETROS OBRIGATORIOS (ENTRE / OU DEPOIS) DOS OPCIONAIS ELES TEM QUE VIR PRIMEIRO SEMPRE!!

    console.log(a + b);

}

function sub(a, b, inveterOp = false) { // ** Exemplo de parâmetros opcionais na vida real

    if (inveterOp) { // true
        console.log(b - a);

    } else { // false
        console.log(a - b);

    }
}
