

## Aula 2

### Introdução

##### Nesta aula foi entendido comandos básicos do Css e com isso foi apresentado a imagem a seguir e a turma iria remontar com elementos html e css 

<img width="560"  display="block" src="https://imgkub.com/images/2022/07/23/imagem_2022-07-23_003526435.png">

##### Após montar a parte visual, a turma deveria colocar a funcionalidade de aumentar, reiniciar e diminuir.

- [x] O botão de aumentar deveria somar 1 ao valor em exibição.
- [x] O botão de reiniciar deveria colocar o valor do input no mostrador.
- [x] O botão diminuir deveria subtrair 1 ao valor em exibição.

### Conceitos

#### Observações Gerais

* Cada botão terá um atributo chamado: `onclick=""` que será usado para rodar um código JavaScript quando o botão é pressionado, no nosso caso vamos colocar iniciadores de funções.

* Cada função dentro do JavaScript será usado para colocar um código referente à aquela função, no caso teremos 3 funções, sendo elas para o botão de aumentar, reiniciar e diminuir.



#### Função para mostrar um número em uma tag html



* Para escrever dentro de um elemento podemos utilizar o código `document.querySelector("#contador").innerHTML = "";`

  * Como iremos utilizar algumas vezes esse código dentro da aplicação, vou colocar dentro de uma função desta forma:

    `function MostrarNumero(numb) {`

      `document.querySelector("#contador").innerHTML = numb;`

    `};`

    Essa função quando é chamada, recebe um valor dentro dos parênteses, que depois será usado para colocar dentro do elemento com o id contador.

  
  * Podemos chamar essa função da seguinte forma:
  
    `MostrarNumero(10);`
  
    Desta forma, irá mostrar o número 10 no elemento que ter o id contador.



#### Função para pegar um valor de uma tag html



* Para pegarmos o valor de um elemento html, vamos utilizar o seguinte código:

  `document.querySelector("#inicial").value;`

  Neste código acima, o código vai retornar o valor que tem no elemento com o id inicial, note que localizamos o elemento da mesma forma que colocamos um valor nela, a única diferença é o .value que retorna o valor daquele elemento.

* Vamos utilizar também o `parseInt()`, que receberá um texto ("9") ou um valor decimal (8.9) e vai retornar o valor no formato de número INTEIRO (9). OBS: Podemos utilizar o `parseFloat()` para retornar um número DECIMAL.

  * Para reiniciar o contador, vamos pegar o valor do input com o id inicial, passar pela função para transformar em um número, guardar em uma [variável global]() para usar nas outras funções e utilizar a função para atualizar o contador.
  
    O código deve ficar da seguinte forma:
  
    `var valorGuardado = 0;`
  
    `function Reiniciar() {`
  
      `valorGuardado = parseInt(document.querySelector("#inicial").value);`
  
      `MostrarNumero(valorGuardado);`
  
    `};`



#### Função para aumentar e diminuir o contador



* A função para aumentar e diminuir o valor do mostrador vai, pagar o valor guardado na [variável global]() somar um ou subtrair um e depois chamar a função para atualizar o contador.

  OBS: Quando colocamos uma variável do tipo Number com os caracteres ++ ou --, é a mesma coisa que fazer `valor = valor + 1`, ou seja, ele deixa o mesmo valor e soma um. 

  Ou fazer `valor = valor - 1`, ou seja, ele deixa o mesmo valor e subtrai um.

  Ficando da seguinte forma:

  `function Aumentar() {`

    `MostrarNumero(valorGuardado++);`

  `};`

  `function Diminuir() {`

    `MostrarNumero(valorGuardado--);`

  `};`
