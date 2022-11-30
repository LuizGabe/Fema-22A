// Inicia a variavel para posteriormente usar
var anoCopa = 0

// Começa um for que iniciará em 1930, indo de 4 em 4, até 2022
for(i = 1930;i <= 2022; i=i+4){
    
    // Coloca mais um para o anoCopa, esta variavel será usada para mostrar qual EDIÇÃO está imprimindo
    var anoCopa = anoCopa + 1

    // Mostra no console.log  
    console.log(`A ${anoCopa}ª copa do mundo foi no ano de ${i} `)

    // Mostra na tela
    document.write(`<h2>A ${anoCopa}ª copa do mundo foi no ano de ${i}</h2>`)
}