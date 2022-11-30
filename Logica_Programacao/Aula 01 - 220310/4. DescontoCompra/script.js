// Definir variaveis do código
let totalDaCompra = parseFloat(prompt("Qual o valor total da compra? (Somente números)"))
let porcentagemDeDesconto = parseFloat(prompt("Qual porcentagem de desconto a ser aplicada? (Número porcentagem)"))

// Contar porcentagem
let desconto = totalDaCompra * (porcentagemDeDesconto / 100)
let totalAPagar = totalDaCompra - desconto

// Escrever como pt-BR
document.write("<div><h1 class=meio>O total da compra ficou "+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalDaCompra)+", com " + porcentagemDeDesconto + "% de desconto ("+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(desconto)+") ficou:</h1>")
document.write("<h1 id=Resultado>"+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalAPagar)+"</h1></div>")