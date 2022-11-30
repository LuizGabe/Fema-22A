// Inputs do usuário
let cadaCrianca = 3
let cadaPizza = 10
let pizzaCusto = 21
let criancaFesta = parseInt(prompt("Informe o número de crianças na festa: "));

// Calculo para saber o número de pedaços totais
let pedacosTotal = criancaFesta * cadaCrianca

// Calculo para saber o número de pizzas
let numeroPizza = Math.ceil(pedacosTotal/10);

// Calculo para saber os gastos da festa
let gastos = numeroPizza * pizzaCusto

// Mostrar resultado
console.log(`Número de crianças na festa: ${criancaFesta}`)
console.log(`Número de pedaços totais calculados: ${pedacosTotal}`)
console.log(`Número de pizzas a serem pedidas: ${numeroPizza}`)
console.log(`Gastos totais: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(gastos)}`)
