// Inputs do usuário 
let largura = parseFloat(prompt(`Digite a largura a ser pintada: `))
let altura = parseFloat(prompt(`Digite a altura a ser pintada: `))

// Calcular area e quantidade de tistas necessarias
let area = (largura*altura)
let qtdTinta = (area/2)

// Mostrar uma resposta completa referente a area e a quantidade de tintas calculadas no passo anterior
console.log(`Sendo a largura ${largura}Mts e altura sendo ${altura}Mts, a área da parede será de ${area}m²`)
console.log(`A quantidade de tinta a ser gasta para pintar uma parede de ${area}m² é de ${qtdTinta} litros de tinta`)
