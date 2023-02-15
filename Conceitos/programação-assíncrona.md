### **Primeiramente vamos entender o que é programação sincrona (Sync)**

> Basicamente é a programação trivial, onde o código é lido linha por linha, sincronizado, é o método padrão ou inicial de se aprender programação.
---

### **Problema da programação sincrona (Sync)**

> Ela é bloqueante ou seja em um fluxo de cadastro de usuario por exemplo, uma ação do seu script vai ser executada e essa ação bloqueia a proxima até que ela termine, isso pode ser prejudicial em termos de otimização.
---

### **Agora como funciona a programação assíncrona (Async)**

> Na` async` as ações do script são executadas ao mesmo tempo e não depende de uma acabar para que a proxima inicie, todas são processadas ao mesmo tempo e podem ser finalizadas em qualquer ordem.
>
> Então podemos entender que diferente da `sync` a `async` **NÃO É BLOQUEANTE!**
>
> Porem nem tudo pode ser `async`, ainda que a programação `async` tenha seus beneficios, ainda precisa ter uma ordem para que não ocorra um resutlado inesperado no seu programa, então o ideal é ter uma mescla entre por exemplo funções `async` e `sync` no seu código.
---

### **3 principais formas de trabalhar com programação (Async)**

> - Async / Await -> <a href=""> Veja mais </a>
> - Promise -> <a href=""> Veja mais </a>
> - CallBacks -> <a href="https://github.com/devliborio/learning-javascript/blob/master/Programa%C3%A3o%20Async%20(Pratica)/index.js"> Veja mais </a>

