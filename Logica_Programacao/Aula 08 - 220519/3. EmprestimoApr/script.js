// Inputs do usuário de valor da casa, anos para pagar e o salário do cliente
let valorCasa = parseInt(prompt("Digite o valor da casa: "))
let anos = parseInt(prompt("Digite o números de anos de parcelamento: "))
let salario = parseInt(prompt("Digite o valor do seu salário: "))

// Calculos simples de meses, 30% do salário
let meses = anos*12
let salario30 = (salario*30)/100

// Calcular a porcentagem da casa, dividindo a casa pelos meses a serem pagos
let parcela = valorCasa/meses

// Mostrar no console.log as informações de input
console.log(`Valor da Casa: ${valorCasa}`)
console.log(`Quantidade de meses para pagar: ${meses}`)
console.log(`Parcela da casa: ${parcela.toFixed(2)}`)
console.log(`Salário do cliente: ${salario}`)
console.log(`30% do salário: ${salario30}`)

// Dar um espaço para mostrar se o emprestimo for aprovado ou não
console.log("")

// Se a parcela da casa der mais que 30% do salário o emprestimo é RECUSADO
if (parcela<salario30) {
    // Se o salário for suficiente, o emprestimo vai ser APROVADO
    console.log(`Emprestimo ✔️APROVADO✔️`)

} else if (parcela>salario30) {
    // Se o salário não for suficiente, o emprestimo vai ser RECUSADO
    console.log(`Emprestimo ❌RECUSADO❌`)
}
