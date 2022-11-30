// Alerta o jogador das 3 tentativas e que os números vao de 0 a 10
alert("Você tem 3 tentativas. Use-as com sabedoria...\nOs números vão de 0 a 10")

// Aleatoriza um número de 0 a 10
var segredo = (Math.random()*10).toFixed(0)

// Começa uma div para organizaçao no css
document.write("<div>")

// Determina as variaveis que vao contar as tentativas ja feitas
var jogadorTenta = 3
var jogadorTentaMostrar = 0

// Comeca o loop de tentativas
for (i=1;i<=3;i++){
    // Define qual tentativa o jogador esta no momento
    var jogadorTenta = jogadorTenta - 1
    var jogadorTentaMostrar = jogadorTentaMostrar + 1

    // Pede a tentativa ao jogador
    var tentativa = parseInt(prompt(`Tente acertar o número: `))

    // Se o número sorteado for igual a tentativa ele anuncia que a pessoa acertou
    if(tentativa == segredo) {
        console.log(`Você acertou. Parabéns! ;)`)
        document.write(`<h1 style=color:green>Você acertou. Parabéns! ;)</h1>`)
        break
    } else {
        // Se não, ele vê em qual tentativa esta e executa o codigo se for 0
        if (jogadorTenta == 0){
            // Se a tentativa do jogador for 0 ele mostra uma mensagem que o jogador perdeu

            // CONSOLE.LOG
            console.log(`A ${jogadorTentaMostrar}ª tentativa foi ${tentativa}.`)
            console.log(`Você Perdeu. :(`)

            // ALERT  
            alert(`Você Perdeu. :(`)

            // TELA
            document.write(`<h2>A ${jogadorTentaMostrar}ª tentativa foi ${tentativa}.</h2>`)
        } else {
            // Se não for 0, ele executa que o jogador errou e mostra a tentariva que falta

            // CONSOLE.LOG
            console.log(`A ${jogadorTentaMostrar}ª tentativa foi ${tentativa}.`)
            console.log(`Você errou, faltam ${jogadorTenta} tentativas restantes.`)
            console.log(``)

            // ALERT
            alert(`Você errou, faltam ${jogadorTenta} tentativas restantes.`)

            // TELA  
            document.write(`<h2>A ${jogadorTentaMostrar}ª tentativa foi ${tentativa}.</h2>`)
        }
            
    }
}
// Se a tentativa do jogador não for igual ao número sorteado então mostra que o jogador perdeu e fala qual tentativa era 
if(tentativa == segredo) {} else {
    // CONSOLE.LOG
    console.log(``)
    console.log(`O número era ${segredo}.`)

    // TELA
    document.write(`<h1 style=color:red>Você perdeu! O número era ${segredo}.</h1>`)
}
