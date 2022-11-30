// Começa o array itens
let itens = []

// Quando o navegador iniciar vai colocar no array os itens armazenados da seção anterior (se tiver), vai puxar a função exibirItens()
function inicializar() {
    itens = JSON.parse(localStorage.getItem('itens') || '[]');
    exibirItens();
}

// Função para adicionar um novo item
function AddItem() {
    
    // Puxa os valores dos inputs
    let inputTask = document.querySelector("#AddInput").value
    let id = document.querySelector("#idItem").value

    // Coloca a primeira letra como maiuscula
    let nome = inputTask[0].toUpperCase() + inputTask.substr(1);

    // Se já tiver um id
    if (id) {
        // Vai procurar no array algum elemento com o mesmo id e mostrar o index dele
        let index = itens.findIndex(f => f.id == id);
        // Vai definir o nome do input como o nome definido dentro do array
        itens[index].nome = nome;
    } else {
        // Se não vai criar um elemento com o input definindo um id aleatório e o marcado como falso
        let Item = {
            id: Math.random().toString(36).substring(2),
            nome: nome,
            marcado: false
        };
        itens.push(Item);
    }
    // Vai salvar o array com o novo item no localStorage
    localStorage.setItem('itens', JSON.stringify(itens));
    // Vai puxar a função exibirItens()
    exibirItens()
    // Vai limpar o input
    document.querySelector("#AddInput").value = null
}

// Função para atualizar os itens na tela
function exibirItens() {
    // Cria uma variavel com uma string vazia
    let template = '';
    // Roda o código o número de itens que tem no array
    for (let i = 0; i < itens.length; i++) {
        // Se o item estiver com o marcado como true, ou verdadeiro, vai rodar o código com um elemento Del no nome
        if(itens[i].marcado) {
            template = template + '<div class="Item">';
            template = template + `<h2><li><del>${i + 1} - ${itens[i].nome}</del></li></h2>`;
            template = template + `<div class="icons">`
            template = template + `<button type="button" class="material-icons md-light" onclick="editarItem('${itens[i].id}')">edit</button>`;
            template = template + `<button type="button" class="material-icons md-light" onclick="excluirItem('${itens[i].id}')">delete</button>`;
            template = template + `<button type="button" class="material-icons md-light" onclick="Checkbox('${itens[i].id}')">task_alt</button>`
            template = template + '</div>';
            template = template + '</div>';
        } else {
            // Se não vai rodar o código sem o elemento del
            template = template + '<div class="Item">';
            template = template + `<h2><li>${i + 1} - ${itens[i].nome}</li></h2>`;
            template = template + `<div class="icons">`
            template = template + `<button type="button" class="material-icons md-light" onclick="editarItem('${itens[i].id}')">edit</button>`;
            template = template + `<button type="button" class="material-icons md-light" onclick="excluirItem('${itens[i].id}')">delete</button>`;
            template = template + `<button type="button" class="material-icons md-light" onclick="Checkbox('${itens[i].id}')">task_alt</button>`
            template = template + '</div>';
            template = template + '</div>';
        }
    }
    // Mostra a string no elemento com id #listaDeItens
    document.querySelector("#listaDeItens").innerHTML = `${template}`;
}

// Função que marca o item, recendo o id e mudando o estado de marcado do item
function Checkbox(id) {
    // Procura o index do id informado
    let index = itens.findIndex(f => f.id == id);
    // Se o item estiver marcado, vai desmarcar e se estiver desmarcado, vai marcar
    if (itens[index].marcado) {
        itens[index].marcado = false
    } else {
        itens[index].marcado = true
    }
    // Armazena a atualização no localStorage
    localStorage.setItem('itens', JSON.stringify(itens))
    // Vai puxar a função exibirItens()
    exibirItens()
}

// Função para excluir o item com o id informado
function excluirItem(id) {
    // Pergunta se o usuario quer realmente excluir, voltando true para verdadeiro ou false para falso
    let r = confirm("Você tem certeza que deseja excluir esse elemento?")
    // Identifica se o retorno for verdadeiro e então exclui
    if (r == true) {
        // Procura o index do id informado
        let index = itens.findIndex(f => f.id == id);
        // Exclui o elemento com base em seu index informado e quantos itens excluir 
        itens.splice(index, 1);
        // Armazena a atualização no localStorage
        localStorage.setItem('itens', JSON.stringify(itens))
        // Vai puxar a função exibirItens()
        exibirItens();
    }
}

// Função para editar o item de acordo com o id informado
function editarItem(id) {
    // Procura o index do id informado
    let index = itens.findIndex(f => f.id == id);
    // Coloca o os valores do array nos inputs correspondentes
    document.querySelector('#idItem').value = itens[index].id;
    document.querySelector('#AddInput').value = itens[index].nome;
}
