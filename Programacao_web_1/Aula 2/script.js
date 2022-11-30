var valorGuardado = 0;
function MostrarNumero(numb) {
    document.querySelector("#contador").innerHTML = numb
}
function Reiniciar() {
    valorGuardado = parseInt(document.querySelector("#inicial").value)
    MostrarNumero(valorGuardado)
}
function Aumentar() {
    MostrarNumero(valorGuardado++)
}
function Diminuir() {
    MostrarNumero(valorGuardado--)
}