// Cria a função para calcular a média
function media(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    return media
}

// Input do usuário
alert("Esta função ira receber três notas e ira calcular a média. ")
let nota1 = parseFloat(prompt("Primeira nota do aluno: "))
let nota2 = parseFloat(prompt("Segunda nota do aluno: "))
let nota3 = parseFloat(prompt("Terceira nota do aluno: "))

// Chamar função de calcular media
let mediaFinal = media(nota1, nota2, nota3).toFixed(1)

// Mostrar ao usuário a resposta na tela
document.write(`<div><h2>Primeira nota do aluno: ${nota1}</h2>`)
document.write(`<h2>Segunda nota do aluno: ${nota2}</h2>`)
document.write(`<h2>Terceira nota do aluno: ${nota3}</h2></div>`)
document.write(`<h1>A média final do aluno foi <spam class="media">${mediaFinal}</spam></h1>`)

// Mostrar ao usuário a resposta no console.log
console.log(`Primeira nota do aluno: ${nota1}`)
console.log(`Segunda nota do aluno: ${nota2}`)
console.log(`Terceira nota do aluno: ${nota3}`)
console.log(``)
console.log(`A média final do aluno foi ${mediaFinal}`)
