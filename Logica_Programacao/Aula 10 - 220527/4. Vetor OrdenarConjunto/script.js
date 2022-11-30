// Conjunto informado na tarefa
a = [50,55,5,4,3,10,15,20,12]

// Mostrar para o usuário o conjunto inicial
console.log(`O conjunto inicial é: ${a}`)

// Mudar a ordem do conjunto
a.sort((a,b) => a-b)

// Linha em branco para mais facil visualização
console.log(``)

// Mostrar o conjunto final  
console.log(`O conjunto final é: ${a}`)
