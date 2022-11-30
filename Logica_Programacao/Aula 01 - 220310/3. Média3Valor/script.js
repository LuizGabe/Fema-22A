let nota1 = parseFloat(prompt("Digite a primeira nota do aluno? (Números com vírgula utilize ponto)"))
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno? (Números com vírgula utilize ponto)"))
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno? (Números com vírgula utilize ponto)"))
let notaAprovacao = 7

let notaFinal = (nota1 + nota2 + nota3) / 3
let notaFinal1 = notaFinal.toFixed(1)

// Mostrar na tela as informações de pontos
document.write("<div><h2 class=meio>Primeira nota: " + nota1 + "</h2>")
document.write("<h2 class=meio>Segunda nota: " + nota2 + "</h2>")
document.write("<h2 class=meio>Terceira nota: " + nota3 + "</h2>")
document.write("<h2 class=meio>Nota final do aluno: " + notaFinal1 + "</h2></div>")

// Identificar se o aluno foi aprovado ou reprovado e mostrar isso na tela
if(notaFinal1 > notaAprovacao){
    document.write("<h1 id=Apr>Aluno Aprovado!</h1>")
} 
else if(notaFinal < notaAprovacao){
    document.write("<h1 id=Rpr>Aluno Reprovado!</h1>")
}
else{
    document.write("<h1 id=Apr>Aluno Aprovado!</h1>")
}