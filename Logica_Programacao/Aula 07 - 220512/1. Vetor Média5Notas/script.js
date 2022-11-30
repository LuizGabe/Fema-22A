// Iniciar a variavel de notas
let notas = [];

// Pedir para o usuário as 5 notas e depois colocar no array
for (i=1;i<=5;i++){
    let nota = parseInt(prompt(`Digite a ${i}ª nota: `));
    notas.push(nota);
}

// Imprimir as notas no console.log
for (i=1; i<5;i++) {
    console.log(`Nota ${i}ª: ${notas[i]}`)
}

// Calcular a média das 5 notas informadas
let media = ((notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/5)

// Mostrar a média final no console.log
console.log(`Média Final: ${media}`)
