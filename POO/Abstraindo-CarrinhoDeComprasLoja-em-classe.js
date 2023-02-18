class CarrinhoDeCompras{

    constructor(){

        // Atributos
        this.preço = 'R$'+140.00;
        this.itens = [];
        this.nome = ''
        this.MétodoDePagamento = 'cartão de credito'
    }

    // Métodos
    
    Comprar(){
        console.log('Comprando...');
    }

    Excluir(){
        console.log('Excluindo...');
    }
}
