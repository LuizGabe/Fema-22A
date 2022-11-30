// Input do Usuário
alert(`Este programa solicita ao usuário o valor investido, a taxa de juros anual e a quantidade de dias com o valor investido, após isso o código calcula o iof e o ir com base na tabela regressiva o valor liquido.`)
let valorInvestido = parseInt(prompt("Digite o Valor Investido: "));
let taxaJurosAno = parseFloat(prompt("Digite a Taxa de Juros Anuais: "));
let qtdDias = parseInt(prompt("Digite a Quantidade de Dias: "))

// Tabela regressiva assincrona
let porcentagemRegressiva = [96,93,90,86,83,80,76,73,70,66,63,60,56,53,50,46,43,40,36,33,30,26,23,20,16,13,10,6,3,0]

// Função para calcular os resultados e mostrar na tela e no console.log
function tblRegressiva(investimento, juros, dias) {

    // Se os dias de juros for maior que 30, ele mostrara um undefined, ai ele muda isso para 0
    diaJuros = porcentagemRegressiva[dias-1]
    if (diaJuros == undefined) {
        diaJuros = 0
    }
    // Juros IR de acordo com a quantidade de dias
    if (dias <= 180) {
        var juroIR = 0.225
    } else if (dias <= 360) {
        var juroIR = 0.2
    } else if (dias <= 720) {
        var juroIR = 0.175
    } else {
        var juroIR = 0.15
    }

    // Calculos de iof, ir e investimento liquido
    var investimentoBruto = investimento + (investimento * ((juros/12)/100))
    var lucroBruto = investimentoBruto - investimento
    var iof = lucroBruto * (diaJuros/100)
    var afterIOF = investimento + (lucroBruto-iof)
    var IR = (lucroBruto-iof) * juroIR
    var descontos = IR + iof
    var investimentoResultante = (investimentoBruto - descontos)
    
    // Mostrar no Console.log
    console.log("Investimento Inicial: "+investimento)
    console.log("Juros ao ano: "+juros+"%")
    console.log("Dias investido: "+dias)
    console.log("")
    console.log("Investimento Bruto: "+investimentoBruto)
    console.log("Lucro Bruto: "+lucroBruto)
    console.log("IOF: "+iof)
    console.log("Depois do IOF: "+afterIOF)
    console.log("IR: "+IR.toFixed(2))
    console.log("Descontos Totais: "+descontos.toFixed(2))
    console.log("Investimento Resultante: "+investimentoResultante.toFixed(2))

    // Mostrar na TELA
    document.write(`<div id=1><h1>Investimento Inicial: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorInvestido)}</h1>`)
    document.write(`<h1>Juros ao ano: ${taxaJurosAno}%</h1>`)
    document.write(`<h1>Dias investido: ${qtdDias}</h1></div>`)
    document.write(`<div id=2><h1>Investimento Bruto: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(investimentoBruto)}</h1>`)
    document.write(`<h1>Lucro Bruto: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lucroBruto)}</h1>`)
    document.write(`<h1>IOF: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(iof)}</h1>`)
    document.write(`<h1>Depois do IOF:${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(afterIOF)}</h1>`)
    document.write(`<h1>IR: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(IR)}</h1>`)
    document.write(`<h1>Descontos Totais: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(descontos)}</h1>`)
    document.write(`<h1 style= color:green>Investimento Resultante: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(investimentoResultante)}</h1></div>`)

}

// Chamando a função com o input do usuário como parametro
tblRegressiva(valorInvestido,taxaJurosAno,qtdDias)
