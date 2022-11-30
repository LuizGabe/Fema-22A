// Define a primeira linha da matrix
let matrizLinha1 = "| x |   | x |   | x |   | x |   | x |   |"

// Define a segunda linha da matrix
let matrizLinha2 = "|   | x |   | x |   | x |   | x |   | x |"

// Imprimi a linha 1 e a linha 2 intercalado
for(i=1; i<=13; i++) {
    if (i%2) {
        console.log(matrizLinha1)
    } else {
        console.log(matrizLinha2)
    }
}