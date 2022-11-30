// Cria a função que retorna:
// Verdadeiro se for positivo
// False se for negativo
function numbTest(numero) {
    if (numero ==0){
        return "neutro"
    } else if (numero > 0) {
        return true
        
    } else if (numero < 0){
        return false
        
    }
}
// Anuncia ao usuario o que faz a aplicação
alert("No próximo dialogo, você colocara um número e o código mostrara se ele é positivo ou negativo")

// Pede ao usuario um número para verificar
let input = parseInt(prompt(`Digite o número para identificar se é positivo ou negativo: `));

// Chama a função
let test = numbTest(input);

// Verifica se o resultado da função é True or False e roda o código dependente disso
if (test == true){
    // Mostrar na tela se for verdadeiro
    document.write(`<h1>Verdadeiro</h1>`)
    document.write(`<h2>O número ${input} é positivo.</h2>`)

    // Mostrar no console.log se for verdadeiro
    console.log(`Verdadeiro`)
    console.log(`O número ${input} é positivo.`)

} else if (test == false){
    // Mostrar na tela se for falso
    document.write(`<h1>Falso</h1>`)
    document.write(`<h2>O número ${input} é negativo.</h2>`)

    // Mostrar no console.log se for verdadeiro
    console.log(`Falso`)
    console.log(`O número ${input} é negativo.`)
    
} else if (test == "neutro"){
    //  Mostrar na tela se o número for neutro
    document.write(`<h1>O número ${input} é neutro.</h1>`)
    
    // Mostrar no console.log se for neutro
    console.log(`Neutro`)
    console.log(`O número ${input} é neutro.`)
}
