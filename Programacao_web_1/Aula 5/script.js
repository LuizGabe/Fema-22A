var alunos = []
function validator() {
    let nomeAluno = document.querySelector("#nomeAluno").value
    let nota1 = parseInt(document.querySelector("#nota1").value)
    let nota2 = parseInt(document.querySelector("#nota2").value)
    console.log(alunos)
    if (nomeAluno == "" || nota1 == "" || nota2 == "") {
        document.querySelector("#error").innerHTML = "Digite um valor valido"
    } else {
        if (nota1 >= 0 && nota1 <= 10 || nota2 >= 0 && nota2 <= 10) {
            let novoAluno = {
                "nome": nomeAluno, 
                "nota1": nota1, 
                "nota2":nota2, 
                "media": ((nota1 + nota2)/2)
            }
            alunos.push(novoAluno)
            console.log(alunos)
            addAluno()
            document.querySelector("#error").innerHTML = ""
            document.querySelector("#nomeAluno").value = null
            document.querySelector("#nota1").value = null
            document.querySelector("#nota2").value = null        
        } else {
            document.querySelector("#error").innerHTML = "Digite números de 0 a 10"
        }
    }
}
function addAluno() {
    let text = ""
    for(i = 0;i<alunos.length;i++) {
        if (alunos[i].media < 7) {
            text = text +" <tr>"
            text = text +`   <td>${alunos[i].nome}</td>`
            text = text +`   <td>${alunos[i].nota1}</td>`
            text = text +`   <td>${alunos[i].nota2}</td>`
            text = text +`   <td><strong><span style="color: red;">${alunos[i].media}</span></strong></td>`
            text = text +" </tr>"
        } else {
            text = text +" <tr>"
            text = text +`   <td>${alunos[i].nome}</td>`
            text = text +`   <td>${alunos[i].nota1}</td>`
            text = text +`   <td>${alunos[i].nota2}</td>`
            text = text +`   <td>${alunos[i].media}</td>`
            text = text +" </tr>"
        }
    }
    document.querySelector("#resultado").innerHTML = text
}