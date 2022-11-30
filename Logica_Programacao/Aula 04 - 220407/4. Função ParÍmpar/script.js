function parImpar(numero){
    let numero1 = parseInt(numero) / 2
    if (!Number.isInteger(numero1)){
    return false
    } else if(Number.isInteger(numero1)) {
    return true
}}
alert("No próximo dialogo digite um número que você quer saber se é Par ou Ímpar")
let valorInput = prompt("Digite o número para identificar se é Par ou Ímpar: ")

let test = parImpar(valorInput)
if (test == true){
    // Mostrar na tela se for verdadeiro
    document.write(`<h1>Verdadeiro</h1>`)
    document.write(`<h2>O número ${valorInput} é par.</h2>`)

    // Mostrar no console.log se for verdadeiro
    console.log(`Verdadeiro`)
    console.log(`O número ${valorInput} é par.`)

} else if (test == false){
    // Mostrar na tela se for falso
    document.write(`<h1>Falso</h1>`)
    document.write(`<h2>O número ${valorInput} é ímpar.</h2>`)

    // Mostrar no console.log se for verdadeiro
    console.log(`Falso`)
    console.log(`O número ${valorInput} é ímpar.`)
}