// Pede ao usuário o nome do funcionario, o salário dele e quantos anos de empresa ele tem
let nomeFuncionario = prompt("Digite o nome do funcionario: ")
let salario = parseInt(prompt("Digite o salário do funcionario: "))
let anosEmpresa = parseInt(prompt("Digite quantos anos ele trabalha na empresa: "))

// Calcula o aumento percentual de acordo com os anos de empresa que a pessoa tem
if(anosEmpresa >= 10) {
        var novoSalario = ((salario * 20) / 100) + salario
        var aumentoPorcentagem = "20"
    } else if(anosEmpresa >= 3 && anosEmpresa < 10) {
        var novoSalario = ((salario * 12.5) / 100) + salario
        var aumentoPorcentagem = "12,5"
    } else if(anosEmpresa < 3) {
        var novoSalario = ((salario * 3) / 100) + salario
        var aumentoPorcentagem = "3"
    }

// Mostrar para o usuário os valores informados e a resposta do programa
console.log(`Nome do funcionario: ${nomeFuncionario}`)
console.log(`Antigo salário: ${salario}`)
console.log(`Quantidade de anos trabalhadas: ${anosEmpresa}`)
console.log("")
console.log(`Novo salário: ${novoSalario}`)
console.log(`Aumento correspondente a ${aumentoPorcentagem}%`)