// input do  usuário
var salario = parseFloat(prompt("Digite o salario do funcionario: "));

// Determinando o salario e realizando ações
if (salario >= 1500 && salario < 2000) {

    // APLICANDO 10% DE IMPOSTOS
    var impostos = ((salario * 10) / 100);
    var salarioLiquido = salario - impostos;

} else if (salario >= 2000 && salario < 2500) {

    // APLICANDO 15% DE IMPOSTOS
    var impostos = ((salario * 15) / 100);
    var salarioLiquido = salario - impostos;

} else if (salario >= 2500) {

    // APLICANDO 18% DE IMPOSTOS
    var impostos = ((salario * 18) / 100);
    var salarioLiquido = salario - impostos;

}
// Mostrar no console.log
console.log(`Salário Bruto: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salario)}`)
console.log(`Impostos descontados: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(impostos)}\n`)
console.log(`Salário Líquido: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioLiquido)}`)

// Mostrar na Tela o resultado
document.write("<div><h1>Salario bruto: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salario) + "</h1>");
document.write("<h1>Impostos descontados: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(impostos) + "</h1>");
document.write("<h1>Salario Líquido: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioLiquido) + "</h1></div>");