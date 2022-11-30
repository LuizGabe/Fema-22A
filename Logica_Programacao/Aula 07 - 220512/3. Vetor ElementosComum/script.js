// Definir e mostrar os conjuntos à serem analisados
let a = [2,4,3,8,9,10,11,15]
let b = [11,15,20,30,40,2]
console.log(`Conjunto A de números informado: ${a}`)
console.log(`Conjunto B de números informado: ${b}`)


// Iniciar a variavel de resultado
let c = []

// Analisando os números
// Primeiro for para repetir a lista a inteira
for(i=0; i<=a.length; i++){
    // Segundo for para repetir a lista b inteira
    for(e=0; e<=b.length; e++){
        // Se o a for igual o b vai colocar no conjunto c
        if(a[i]==b[e]){
            c.push(b[e])
        }
    }
}

// Mostrar no console.log
console.log(`Números em comum: ${c}`)
