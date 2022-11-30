// Se apertar o botão ele roda o código
function calcularNota() {
    // Puxa o input do nome
    nome = document.querySelector("#nome").value

    // Puxa o input do nota1
    nota1 = parseInt(document.querySelector("#nota1").value)

    // Puxa o input do nota2
    nota2 = parseInt(document.querySelector("#nota2").value)

    // Escreve no html pra mostrar o resultado
    document.querySelector("#escrever").innerHTML = `A média do aluno ${nome} é ${((nota1+nota2)/2)}`
}