# Aula 1
## Exemplos Primários

**Introdução**

Essa foi a primeira aula da disciplina de desenvolvimento web, nela relembramos coisas já vistas em lógica de programação e construímos um front simples, que deveria conter:

- [ ] 3 inputs, o primeiro de nome e os outros dois, como nota 1 e nota 2
- [ ] 1 um pequeno botão que irá calcular a média do aluno 
- [ ] mostrar em um elemento do tipo `<p></p>`



**Conceitos**

Para isso, vimos conceitos para buscar o elemento com um Id e pegar o valor desse elemento ou colocar um valor nesse elemento.



##### Pegar o valor de um input com o Id nome:

`let nome = document.querySelector("#nome").value`



##### Colocar um valor em um elemento com o Id escrever:

`document.querySelector("#escrever").innerHTML = "O Aluno Luiz obteve como média 9.5"` 



##### Calcular média:

Para calcular a média, somamos a nota 1 e nota 2 e depois dividimos pelo número de elementos somados

dessa forma: 


    Nota 1 = 10
      
    Nota 2 = 9
    
                              10 + 9 = 19
    
                                19 / 2
    
                                  9.5



##### String para Number

Quando a gente for pegar o valor de um elemento de input, ele virá no formato de string (texto), desta forma: "10". Para então transformarmos em Number, colocaremos dentro de uma função nativa do Javascript, chamada parseInt (para números inteiros) ou parseFloat (para números decimais). Deve ficar da seguinte forma:

`nota1 = parseInt("10")`



Desta forma a nota1 poderá ser usada como número e não como um texto. 
