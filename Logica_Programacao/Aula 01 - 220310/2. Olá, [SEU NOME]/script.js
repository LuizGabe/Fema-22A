// Input do usuário
let nome1 = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ")

// Definir a primeira letra para CapsLock on
let nome = nome1[0].toUpperCase() + nome1.substr(1);

// Escrever na página
document.write("<div><h2 class=meio>Olá, meu nome é " + nome + "</h2>");
document.write("<h2 class=meio> e tenho " + idade + " anos de idade" + "</h2></div>");
