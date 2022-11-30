// Pede ao usuário a largura e o comprimento do terreno
let larguraTerreno = parseInt(prompt("Digite a area do 1ª terreno: "));
let comprimentoTerreno = parseInt(prompt("Digite a area do 2ª terreno: ")); 

// Calcula a área de acordo com os dados informados
let area = (larguraTerreno*comprimentoTerreno);

// Mostra os dados informados
console.log(`Largura do terreno: ${larguraTerreno} metros`);
console.log(`Comprimento do terreno: ${comprimentoTerreno} metros`);
console.log(`Area calculada do terreno: ${area}m²`);
console.log("")

// De acordo com a área calculada mostra a classificação dele
if(area >= 500) {
    console.log("Classificado como \nTERRENO VIP");
} else if(area > 100 && area <= 500) {
    console.log("Classificado como \nTERRENO MASTER");
} else if(area <= 100) {
    console.log("Classificado como \nTERRENO POPULAR");
}