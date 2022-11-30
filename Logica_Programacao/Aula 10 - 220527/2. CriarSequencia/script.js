// Inicial as variáveis necessarias
let primeiroval = parseInt(prompt('Digite seu valor inicial: '))
let valorfinal = parseInt(prompt('Digite o valor final: '))   
let incremento = parseInt(prompt('Digite o incremento de números: ')) 
let conjunto = []

// Começa no primeiro valor, vai indo conforme o incremento colocado e termina no último valor
for(i=primeiroval;i<=valorfinal; i = i + incremento){
    conjunto.push(i)
}
// Vai colocar o conjunto para um formato de texto
let texto = `${conjunto}`

// Vai tirar as vírgulas do texto
for (i=0;i<=conjunto.length;i++){
    texto = texto.replace(","," ")
}

// Mostrar para o usuário a resposta obtida
console.log(`Contagem: ${texto} Acabou!`)