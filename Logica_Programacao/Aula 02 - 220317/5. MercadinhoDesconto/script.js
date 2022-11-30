// Delay para recarregar a página
var delay=5000;

// Input do usuário (valorCompra e pagamentForm)
let valorCompra = parseFloat(prompt("Digite o valor da compra: "));
let pagamentForm = prompt("Digite a forma de pagamento: (Digite apenas o número correspondente)\n\nSerá aplicado um desconto de 5% à vista e no cartão de débito.\n\n1) à vista; \n2) cartão de débito; \n3) cartão crédito; ");

// Identificar o valor informado no pagamentForm e direcionar para uma página personalizada de acordo com o pagamentif
if (pagamentForm == "1") {
    var pagamentif = "True"
    var pagamento = "À vista"
} else if (pagamentForm == "2") {
    var pagamentif = "True"
    var pagamento = "Cartão de dédito"
} else if (pagamentForm == "3") {
    var pagamentif = "False"
    var pagamento = "Cartão de crédito"
} else if (pagamentForm == "") {
    var pagamentif = "Limpo"
} else{
    var pagamentif = "naoValido"
}

// Identicar o pagamentif e personalizar a página web
if (pagamentif == "True") {

    // À VISTA OU CARTÃO DE DÉBITO

    // Calcula o desconto
    let desconto = (valorCompra * 5) / 100;
    // Subtrai o desconto do valor da compra
    let valorTotal = valorCompra - desconto;
    // Motrar na Tela a resposta
    document.write("<div><h1>Forma de pagamento selecionada: "+pagamento+"</h1>")
    document.write("<h1>Valor total da compra: "+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorCompra))
    document.write("<h1>Valor descontado - 5%: "+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(desconto))
    document.write("<h1>Total a pagar: "+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)+"</div>")

} else if (pagamentif == "False") {

    // CARTÃO DE CRÉDITO

    // Determina a variavel desconto
    let desconto = 0
    // Subtrai o desconto do valor da compra
    let valorTotal = valorCompra - desconto

    // Mostrar na Tela a resposta
    document.write("<div><h1>Forma de pagamento selecionada: "+pagamento+"</h1>")
    document.write("<h1>Valor total da compra: "+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorCompra))
    document.write("<h1>Valor descontado: "+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(desconto))
    document.write("<h1>Total a pagar: "+new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)+"</div>")
} else if (pagamentif == "Limpo") {

    // CAMPO DE FORMA DE PAGAMENTO LIMPO

    // Mostrar na Tela a resposta
    document.write("<div><h1>Por favor, selecione uma forma de pagamento!</h1>")
    document.write("<h2>Recarregando a página em 5 segundos...</h2></div>")

    // Esperar 5 segundos e recarregar a página
    setTimeout(function(){document.location.reload(true);},delay);
} else if (pagamentif == "naoValido") {

    // A FORMA DE PAGAMENTO FOI DIFERENTE DAS ALTERNATIVAS DADAS

    // Motrar na Tela a resposta
    document.write("<div><h1>Por favor, escreva o número correspondente a forma de pagamento selecionada!</h1>")
    document.write("<h2>Recarregando a página em 5 segundos...</h2></div>")

    // Esperar 5 segundos e recarregar a página
    setTimeout(function(){document.location.reload(true);},delay);
}