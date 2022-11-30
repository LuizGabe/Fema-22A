// Vai repetir 100 vezes
for (i=1;i<=100;i++){
    // Vai armazenar o primeiro número do for em uma variavel "Numero0"
    var numero0 = i

    // Mostra qual tabuada esta calculando nesse momento
    console.log(`TABUADA DO ${i}`)

    // Vai reperir 5 vezes em todos os 100 números
    for (e=1; e<=5; e++) {
        // Vai armazenar o segundo número do for em uma variavel "Numero2"
        var numero2 = e

        // Vai calcular o total da conta obtida
        var total = (numero0 * numero2)

        // Mostra na tela seguindo a ordem "primeiro número x segundo número = total da conta"
        console.log(`${numero0} x ${numero2} = ${total}`)
    }
    // Dar um espaço entre as contas 
    console.log("")
}