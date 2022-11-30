// Iniciar o array nomes
let nomes = []

// Pedir para o usuário 7 vezes e guardar no array nome
for (i=1;i<=7;i++) {
    let nome = prompt(`Informe o ${i}ª nome: `)
    nomes.push(nome)
}

// Mostrar os nomes começando no ultimo valor e indo até o primeiro
for (e=nomes.length;e>=0;e--) {
    console.log(nomes[e])
}