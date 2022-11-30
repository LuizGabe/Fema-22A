let a = parseFloat(prompt("Insira o primeiro número: "));
let b = parseFloat(prompt("Insira o segundo número: "));

let soma = (a + b);
let subtracao = (a - b);
let multiplicacao = (a * b);
let divisao = (a / b).toFixed(2);
// Título
document.write("<h1 id=titulo>Operações basicas: Soma, Subtração, Multiplicação e Divisão</h1>")

// TELA
// Montra os valores da soma e o resultado da soma
document.write("<div><h1 class=Meio>" + "A soma de " + a + " e " + b + " é igual a " + (soma)+"</h1>");

// Montra os valores da subtração e o resultado da subtração
document.write("<h1 class=Meio>"+"A subtração de " + a + " e " + b + " é igual a " + subtracao+"</h1>");

// Montra os valores da multiplicação e o resultado da multiplicação
document.write("<h1 class=Meio>"+"A multiplicação de " + a + " e " + b + " é igual a " + multiplicacao+"</h1>");

// Montra os valores da divisão e o resultado da divisão
document.write("<h1 class=Meio>"+"A divisão de " + a + " e " + b + " é igual a " + divisao+"</h1></div>");


// CONSOLE
// Montra os valores da soma e o resultado da soma
console.log("A soma de " + a + " e " + b + " é igual a " + (soma));

// Montra os valores da subtração e o resultado da subtração
console.log("A subtração de " + a + " e " + b + " é igual a " + subtracao);

// Montra os valores da multiplicação e o resultado da multiplicação
console.log("A multiplicação de " + a + " e " + b + " é igual a " + multiplicacao);

// Montra os valores da divisão e o resultado da divisão
console.log("A divisão de " + a + " e " + b + " é igual a " + divisao);
