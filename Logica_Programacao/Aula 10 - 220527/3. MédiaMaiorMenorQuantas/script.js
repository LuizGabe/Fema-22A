// Inicia as variáveis necessarias
let idade = [];
let cont18mais = []
let cont5menos = []
let maioridade = 0;
let media = 0; 

// Pede ao usuário 10 vezes e adiciona no conjunto "idade"
for (i=1;i<11;i++) {
    idade.push(parseInt(prompt(`Digite a ${i}ª idade: `)))
}

// Vai rodar o codigo 10 vezes
for (i=0;i<idade.length;i++) {
    // Vai somar todas as idades em uma variavel chamada "media"
    media = media + idade[i]

    // Se idade for maior ou igual a 18 ele adiciona no conjunto "cont18mais"
    if(idade[i] >=18){
        cont18mais.push(idade[i])
    }

    // Se idade for menor ou igual a 5 ele adiciona no conjunto "cont5menos"
    if(idade[i] <=5){
        cont5menos.push(idade[i])
    }

    // Se a idade for maior que a ultima idade testada, ele muda o nome da "maioridade" para ela
    if(idade[i] > maioridade) {
        maioridade = idade[i];
    }
}
// Calcula a média conforme o número de idades mostradas
media = media/idade.length

// Mostra pro usuário o indice
console.log(`Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:`)
console.log(`As idades que escolhemos foram: ${idade}`)
console.log(``)
// Mostra pro usuário os resultados obtidos
console.log(`A) A média das idades ${idade} é ${media}`)
console.log(`B) Pessoas com mais de 18 anos: ${cont18mais.length}`)
console.log(`C) Pessoas com menos de 5 anos: ${cont5menos.length}`)
console.log(`D) A maior idade é: ${maioridade}`)