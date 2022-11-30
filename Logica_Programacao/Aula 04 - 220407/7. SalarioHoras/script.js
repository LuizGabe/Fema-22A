// Cria a função para calcular o valor da hora do funcionario
function reaisH(reais, horas) {
    let resultado = (reais / horas)
    return resultado
}
// Input do usuário referente ao salario e horas.
alert(`Neste programa o usuário ira digitar o salário e as horas trabalhadas e o código mostrara quanto a pessoa ganhou por hora.`)
let reais = parseFloat(prompt(`Digite o salário:`))
let horas = parseFloat(prompt(`Digite quantas horas trabalhadas:`))

// Chama a função
let resultado = reaisH(reais,horas)

// Mostrar na tela
document.write(`<div><h1>Salário ganho: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(reais)}</h1>`)
document.write(`<h1>Horas trabalhadas: ${horas}</h1>`)
document.write(`<h1>Ganho por hora: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado)}</h1></div>`)

// Mostrar no console.log
console.log(`Salário ganho: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(reais)}`)
console.log(`Horas trabalhadas: ${horas}`)
console.log(`Ganho por hora: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(resultado)}`)
