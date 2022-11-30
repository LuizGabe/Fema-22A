// Input do usuário
alert("Este programa irá calcular o valor de venda de uma peça conforme abaixo \n\nValor da peça menor que 50 = +45%\nValor da peça maior que 50 = +30%")
let precoCompra = parseFloat(prompt("Digite o valor de compra da peça:"))

// Mostrar o input do usuário
console.log(`Preço de compra: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(precoCompra)}`);
console.log(``);

// Se for menor que 50 vai aumentar 45% no valor, se não vai aumentar 30%
if (precoCompra < 50) {
    precoVenda = precoCompra + ((precoCompra*45)/100);
} else {
    precoVenda = precoCompra + ((precoCompra*30)/100);
}

// Mostrar o preço de venda do produto com a soma
console.log(`Preço de venda: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(precoVenda)}`)
