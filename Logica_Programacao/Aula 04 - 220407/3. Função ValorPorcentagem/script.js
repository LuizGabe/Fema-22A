// Criando a função para calcular a porcentagem
function porcentagem(valor, porcentagem){
    let resultado = ((valor * porcentagem) / 100)
    return resultado
}

// Inputs do usuário - Valor, Porcentagem
alert("Esta função recebe um valor e a porcentagem, depois calcula e retorna o valor correspondente.")
let valorInput = parseInt(prompt(`Digite o valor inteiro que quer descobrir a porcentagem: `))
let porcentagemInput = parseInt(prompt(`Digite a porcentagem referente ao número inteiro já informado: `))

// Chamar função para calcular a porcentagem
let resultadoPorcentagem = porcentagem(valorInput,porcentagemInput)

// Mostrar na tela 
document.write(`<h1>${porcentagemInput}% de ${valorInput} é ${resultadoPorcentagem}</h1>`)
console.log(`${porcentagemInput}% de ${valorInput} é ${resultadoPorcentagem}`)
