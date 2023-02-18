class pedidoSistemaDelivery{

    constructor(){
        // Atributos
        this.preço = "R$"+30,
        this.nome = "Hamburger",
        this.frete = "R$"+10,
        this.estabelecimento = "Mac Donald's"
        this.métodoPagamento = ['cartão', 'dinheiro', 'pix'];
    }

    // Métodos
    comprar(){
        console.log('comprando....');
    }

    AdicionarAoCarrinho(){
        console.log('adicionando ao carrinho');
    }

}