
let filmes = [];
var NavMostrar = true;

function inicializar() {
    filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
    exibirFilmes();
    teste()
}

function salvarFilme(event) {
    event.preventDefault();
    console.log('salvar filme');

    let id = document.querySelector('#idFilme').value;
    let titulo = document.querySelector('#titulo').value;
    let link = document.querySelector('#link').value;

    if (id) {
        let index = filmes.findIndex(f => f.id == id);
        filmes[index].titulo = titulo;
        filmes[index].link = link;
    } else {
        let filme = {
            id: Math.random().toString(36).substring(2),
            titulo: titulo,
            link: link
        };
    
        filmes.push(filme);
    }

    localStorage.setItem('filmes', JSON.stringify(filmes));    

    exibirFilmes();

    document.querySelector('#idFilme').value = null;
    document.querySelector('#titulo').value = null;
    document.querySelector('#link').value = null;
}
function teste() {
    let ir1 = document.querySelector("#risco")
    let ir2 = document.querySelector("#formulario")
    let mN = document.querySelector("#mostrarNav")
    // Mudar cor para branco
    
    // Mostrar ou apagar nav
    if(!NavMostrar) {
        mN.style.cssText = "background-color:red"
        ir1.style.cssText = 'display:inline'
        ir2.style.cssText = 'display:inline'
        NavMostrar = true
    } else if (NavMostrar) {
        mN.style.cssText = "background-color:white"
        ir1.style.cssText = 'display:none'
        ir2.style.cssText = 'display:none'
        NavMostrar = false
    }
}

function exibirFilmes() {
    let template = '';
    for (let i = 0; i < filmes.length; i++) {
        template = template + '<div class="filme">';
        template = template + `<p>${filmes[i].titulo}</p>`;
        template = template + `<img src="${filmes[i].link}" ></img>`;
        template = template + `<div class="icons">`
        template = template + `<button type="button" class="material-icons" onclick="editarFilme('${filmes[i].id}')">edit</button>`;
        template = template + `<button type="button" class="material-icons" onclick="excluirFilme('${filmes[i].id}')">delete</button>`;
        template = template + '</div>';
        template = template + '</div>';
   }    
    if(document.querySelector("#listaDeFilmes") != null){
        document.querySelector("#listaDeFilmes").innerHTML = template
    }
}

function excluirFilme(id) {
    let r = confirm("Você tem certeza que deseja excluir esse elemento?")
    if (r == true) {
        console.log('id ', id);
        let index = filmes.findIndex(f => f.id == id);
        filmes.splice(index, 1);
        localStorage.setItem('filmes', JSON.stringify(filmes))
        exibirFilmes();
    }
}

function editarFilme(id) {
    let index = filmes.findIndex(f => f.id == id);

    document.querySelector('#idFilme').value = filmes[index].id;
    document.querySelector('#titulo').value = filmes[index].titulo;
    document.querySelector('#link').value = filmes[index].link;
}







