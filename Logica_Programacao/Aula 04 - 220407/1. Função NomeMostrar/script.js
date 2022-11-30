// Anuncia ao usuário o que a aplicação faz
alert(`Digite algo e o código vai mostrar na tela.`)

// Pede ao usuário o texto para mostrar na tela
let inputUsuario = prompt(`Digite algo: `)

// Cria a função para mostrar na tela
function imprimir(texto) {
    document.write(`<h1>${texto}</h1>`)
    console.log(texto)
}   

// Chama a função, dando como variavel o texto que o usuário digitou
imprimir(inputUsuario)
