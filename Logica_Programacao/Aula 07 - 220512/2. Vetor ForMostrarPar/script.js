// Iniciar e mostrar a variável com os números informados na questão
let vetor = [2,4,3,8,9,10,11,15]
console.log(`Conjunto de números informado: ${vetor}`)

// Iniciar o índice
let indice = 0

// For para passar por todos os números do Array
for (i=0; i<= (vetor.length-1);i++){

    // Identificar se é Par
    if (vetor[i] % 2) {
        // Caso for VERDADEIRO

    } else {
        // Caso for FALSO

        // Calcular o índice
        indice = indice + 1

        // Mostra no console.log o número que for Par
        console.log(`${indice}ª par: ${vetor[i]}`)
    }
}
