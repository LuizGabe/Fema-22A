// Definir input do usuário
let capitalInicial = parseFloat(prompt("Digite o capital inicial investido: "))
let capitalFinal = parseFloat(prompt("Digite o capital final: "))

// Calculo de porcentagem e ganhos.
let porcentagemGanha = (((capitalFinal / capitalInicial) - 1) * 100).toFixed(2)
let valorGanho = capitalFinal - capitalInicial

// Definir cor e se foi Prejuízo ou Lucro
if(valorGanho > 0){
    var ganhoPerda = "Lucro"
    var Cor = "green"
}
else if(valorGanho < 0){
    var ganhoPerda = "Prejuízo"
    var Cor = "red"
}
else {
    var ganhoPerda = "Prejuízo e Lucro"
    var Cor = "blue"
}
// Mostrar na Tela a resposta
document.write("<div><h1 class=meio>Capital inicial investido: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(capitalInicial)+"</h1>")
document.write("<h1 class=meio>Capital final: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(capitalFinal)+"</h1>")
document.write("<h1 class=meio>"+ganhoPerda+": <span style=color:"+ Cor +">" + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorGanho)+"</span></h1>")
document.write("<h1 class=meio>Equivalente a <span style=color:"+ Cor +">" + porcentagemGanha + "%</span> de "+ "<span style=color:"+ Cor +">"+ganhoPerda+"!</span></h1></div>")

// Mostrar no Console a resposta
console.log("Capital inicial investido: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(capitalInicial))
console.log("Capital final: " + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(capitalFinal))
console.log(ganhoPerda+": "+ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorGanho))
console.log("Equivalente a " + porcentagemGanha + "% de "+ganhoPerda+"!")
