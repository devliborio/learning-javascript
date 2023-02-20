// Componentes!
class LeitorDeArquivo {
    Ler(caminho) {
        return "Conteudo do arquivo"
    }
}

class EscritorDeArquivo {
    Escrever(arquivo, conteudo) {
        console.log("Conteudo escrito!");
    }
}

class CriadorDeArquivo{
    CriarArquivo(nome){
        console.log("Arquivo criado!");
    }
}

class CriadorDePdf{
    CriarPdf(nome){
        console.log("PDF criado!");
    }  
}

class DeletarArquivos{
    DeletarArquivo(nome){
        console.log("Arquivo deletado!");
    }
}

/*---------------------------------------------------------------------------------------------------------------- */

class ManipuladorDeArquivo {
    // Usando a compisição
    constructor(){
        this.arquivo = nome;
        this.leitor = new LeitorDeArquivo();
        this.escritor = new EscritorDeArquivo();
        this.criador = new CriadorDeArquivo();
        this.deletar = new DeletarArquivos();   

    }
}

class GerenciadorDeUsuario{
    // Usando a compisição
    constructor(){
        this.criador = new CriadorDePdf();
        this.escritor = new EscritorDeArquivo();
    }

    SalvarListaDeUsuarios(){
        this.criador.CriarArquivo('Usuários.pdf');
        this.escritor.Escrever('Usuários.pdf', lista);
    }
}

var manipulador = new ManipuladorDeArquivo("meuarquivo.txt")

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.CriarArquivo();
manipulador.deletar.DeletarArquivo();