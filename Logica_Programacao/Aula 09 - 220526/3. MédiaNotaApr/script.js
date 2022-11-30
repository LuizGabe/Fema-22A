// Pede ao usuário as 3 notas do aluno
let nota1 = parseInt(prompt("Digite a 1ª nota: "));
let nota2 = parseInt(prompt("Digite a 2ª nota: ")); 
let nota3 = parseInt(prompt("Digite a 3ª nota: "));

// Calculaa média do aluno
let media = (nota1+nota2+nota3)/3;

// Mostra os dados informados e a média calculada
console.log(`1ª nota: ${nota1}`);
console.log(`2ª nota: ${nota2}`);
console.log(`3ª nota: ${nota3}`);
console.log(`Média das três notas apresentadas: ${media}`);
console.log("")

// De acordo com a média calculada, mostra ao usuário se o aluno foi APROVADO, esta de RECUPERAÇÃO ou se o aluno foi REPROVADO
if(media >= 70) {
    console.log("Aluno foi APROVADO");
} else if(media >= 50 && media <= 69) {
    console.log("Aluno esta de RECUPERAÇÃO");
} else if(media <= 49) {
    console.log("Aluno está REPROVADO");
}