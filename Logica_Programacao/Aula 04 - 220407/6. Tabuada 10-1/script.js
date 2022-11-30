// Repete o código 10 vezes, com o indice indo de 10 a 1
for (i=10;i>=1;i--){
    var numero0 = i
    
    // Repete o código 10 vezes, com o indice indo de 10 a 1
    for (e=10; e>=1; e--) {
        var numero2 = e

        // Calcula a multiplicação entre o número do primeiro for e do segundo for
        var total = (numero0 * numero2)

        // Mostra no console.log
        console.log(`${numero0} x ${numero2} = ${total}`)

        // Mostra na tela
        document.write(`<h2>${numero0} x ${numero2} = ${total}</h2>`)
    }
    // Dá um espaçamento entre uma tabuada e outra
    document.write(`<br>`)
}