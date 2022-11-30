// Repete o código 30 vezes, começando do 30 e indo até o 1
for(i=30;i>=1;i--) {
    // Se ele não for divisivel por 4 vai imprimir somente o valor, se for divisivel por 4 vai imprimir com [] em volta do valor
    if (i%4){
        console.log(""+i+"")
    } else {
        console.log(`[${i}]`)
    }     
}