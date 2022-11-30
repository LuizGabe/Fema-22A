//Inicia o valores
let valores = [] 
let maiorValor = 0;
let soma = 0; 

// Pede ao usuario 5 vezes o número e guarda os valores no valores
for (i=1;i<6;i++) {
    valores.push(parseInt(prompt(`Digite o ${i}ª valor: `)))
}

// Repete o código 6 vezes
for (i=0;i<valores.length;i++) {

    // Soma todos os número do conjunto
    soma = soma + valores[i]

    // Se o valor referente ao indice for maior que o maiorValor registrado, ele guard esse valor no maiorValor
    if(valores[i] > maiorValor) {
    maiorValor = valores[i];
}
}

// Mostra no console.log a media dos 5 valores informados
console.log(`A média dos valores ${valores} é ${soma/valores.length}`)

// Mostra no console.log o maior valor dos 5 valores informados
console.log(`O valor máximo destes mesmos valores é ${maiorValor}`)
