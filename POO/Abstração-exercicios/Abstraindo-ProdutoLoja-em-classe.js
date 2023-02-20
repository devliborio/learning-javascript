class ProdutoLoja {

    constructor() {
        // Atributos
        this.nome = 'Sabonete'
        this.preço = 'R$'+ 5.00 
        this.categoria = 'limpeza'
        this.validade = 10+'/'+09+'/'+23 
    }

    // Métodos
    Comprar(){
        console.log('Comprando produto...');
    }

    Pegar(){
        console.log('Pegando produto');
    }
}