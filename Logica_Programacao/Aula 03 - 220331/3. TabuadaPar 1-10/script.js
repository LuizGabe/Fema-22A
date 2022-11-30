// Vai testar os números de 1 a 10 para ver se é impar ou par
for (i=1;i<=10;i++){
    var numero0 = i
    if (Number.isInteger(i/2)) {
        //Vai imprimir a tabuada do número que é par, do 0 ao 10
        for (e=1; e<=10; e++) {
            var numero2 = e

            // Faz a multiplicação do número do primeiro for, com o número do segundo for
            var total = (numero0 * numero2)

            // Mostra no console o resultado
            console.log(`${numero0} x ${numero2} = ${total}`)

            // Mostra na tela o resultado
            document.write(`<h2>${numero0} x ${numero2} = ${total}</h2>`)
        }
        // Dá um espaçamento entre uma tabuada e outra
        document.write(`<br>`)
    }
}