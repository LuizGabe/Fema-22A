// Input do usuário
let valor1 = parseFloat(prompt("Digite o Primeiro número: "))
let valor2 = parseFloat(prompt("Digite o Segundo número: "))
let valor3 = parseFloat(prompt("Digite o Terceiro número: "))

// Identificar o maior valor e colocar ela na variavel valor
if (valor1 > valor2 && valor1 > valor3) {
    console.log("O maior valor é o: "+valor1)
    var valor = valor1
} else if (valor2 > valor1 && valor2 > valor3) {
    console.log("O maior valor é o: "+valor2)
    var valor = valor2
}else if (valor3 > valor2 && valor3 > valor1) {
    console.log("O maior valor é o: "+valor3)
    var valor = valor3
}

// Mostrar na Tela o resultado
document.write("<div><h2>Primeiro valor: "+valor1)
document.write("<h2>Segundo valor: "+valor2)
document.write("<h2>Terceiro valor: "+valor3)
document.write("<h1>O maior valor é o "+valor+"</h1></div>")
