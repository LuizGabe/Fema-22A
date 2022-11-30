// Input do usuário
let numero = parseInt(prompt("Digite um número para identificar se ele é par ou ímpar: "))
let numero1 = numero / 2

// Identifica se o número é Par ou Ímpar
if (Number.isInteger(numero1)){
    console.log("O número " + numero + " é Par")
    var PI = "Par"
} else if(!Number.isInteger(numero1)) {
    console.log("O número " + numero + " é Ímpar")
    var PI = "Ímpar"
}

// Mostrar na Tela o resultado
document.write("<h1>O número " + numero + " é " + PI + "</h1>")
