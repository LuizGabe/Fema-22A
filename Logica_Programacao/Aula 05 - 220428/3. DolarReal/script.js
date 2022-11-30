// Input do usuário
alert("Este programa irá calcular o valor informado em reais.");
let valorDolar = parseFloat(prompt("Digite o valor em dolar: "));
let valorCotacao = parseFloat(prompt("Digite a cotação do dolar: "));

// Calculo em real
let valorReal = (valorDolar * valorCotacao);

// Mostrar no console
console.log(`Valor em dolar: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(valorDolar)}`);
console.log(`Cotação: ${valorCotacao}`);
console.log("");
console.log(`Valor em reais: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorReal)}`);
