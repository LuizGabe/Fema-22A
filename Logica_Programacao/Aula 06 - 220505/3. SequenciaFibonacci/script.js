// Inicia as variáveis
let repeticoes = 50
let numero1 = 1
let numero2 = 0

for(let i = 1; i <=repeticoes; i ++){
    // Definir a soma do número 2 e número 1
    let numero3 = numero2 + numero1

    // Imprimir a soma
    console.log(numero3)

    // Colocar o número 1 no número 2 e colocar o número 3 no número 1
    numero2 = numero1
    numero1 = numero3
}
