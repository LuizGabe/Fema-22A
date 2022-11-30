// Input do usuário
let nota1 = parseFloat(prompt("Digite a primeira nota do aluno? (Números com vírgula utilize ponto)"))
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno? (Números com vírgula utilize ponto)"))
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno? (Números com vírgula utilize ponto)"))
let notaAprovacao = 70

// Calculos
let notaFinal = (nota1 + nota2 + nota3) / 3
let notaFinal1 = notaFinal.toFixed(1)

// Mostrar na tela as informações de pontos
document.write("<div><h2 class=meio>Primeira nota: " + nota1 + "</h2>")
document.write("<h2 class=meio>Segunda nota: " + nota2 + "</h2>")
document.write("<h2 class=meio>Terceira nota: " + nota3 + "</h2>")
document.write("<h2 class=meio>Média final: " + notaFinal1 + "</h2></div>")
 
// Identificar o conceito
 
/* 
    A 100-90
    B 70-89
    C 50-69
    D 0-49
*/
if (notaFinal1 < 50){
    console.log("D")
    var Conceito = "D"
} else if (notaFinal1 < 70 ){
    var Conceito = "C"
    console.log("C")
} else if (notaFinal1 < 90) {
    var Conceito = "B"
    console.log("B")
} else if (notaFinal1 < 101) {
    var Conceito = "A"
    console.log("A")
} else if (notaFinal1 > 100){
    var Conceito = "Média maior que 100"
    console.log("A média ficou " + notaFinal1)
}
if (notaFinal1 >=70 && notaFinal1 < 101){
    var cor = "green"
} else if(notaFinal1 <=70){
    var cor = "red"
}
// Mostrar o Conceito na Tela
if (notaFinal1 < 101){
    document.write("<div><h1 class=meio>Conceito: <span style=color:"+cor+">" + Conceito+"</span>")
}

 // Identificar se o aluno foi aprovado ou reprovado e mostrar isso na tela
if(notaFinal1 >= notaAprovacao && notaFinal1 < 101){
    document.write("<h1 class=Apr>Aluno Aprovado!</h1></div>")
} 
 else if(notaFinal < notaAprovacao){
    document.write("<h1 class=Rpr>Aluno Reprovado!</h1></div>")
}