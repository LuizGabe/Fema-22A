let itens = []

function inicializar() {
    itens = JSON.parse(localStorage.getItem('itens') || '[]');
    exibirItens();
    console.log(itens)
}

function performPaste() {
    navigator.clipboard.readText()
        .then((text) => {
            document.querySelector('#LinkImagem').value = `${text}`
        })
}
document.querySelector('#Paste').addEventListener('click', performPaste);

function AddItem() {
    console.log("Salvando Item")

    let inputTask = document.querySelector("#AddInput").value
    let id = document.querySelector("#idItem").value
    let link = document.querySelector("#LinkImagem").value
    let preco = document.querySelector("#ItemPreco").value

    let nome = inputTask[0].toUpperCase() + inputTask.substr(1);

    if (id) {
        let index = itens.findIndex(f => f.id == id);
        itens[index].nome = nome,
        itens[index].link = link
        itens[index].preco = preco
    } else {
        let Item = {
            id: Math.random().toString(36).substring(2),
            nome: nome,
            link: link,
            preco: preco
        };
        console.log(itens)
        itens.push(Item);
    }
    localStorage.setItem('itens', JSON.stringify(itens));
    exibirItens()
    document.querySelector("#AddInput").value = null
    document.querySelector("#LinkImagem").value = null
    document.querySelector("#ItemPreco").value = null
}

function exibirItens() {
    let template = '';
    for (let i = 0; i < itens.length; i++) {
        template = template + '<div class="Item">';
        template = template + `<image src="${itens[i].link}"></image>`;
        template = template + `<p>${itens[i].nome}</p>`
        template = template + `<div class="icons">`
        template = template + `<button type="button" class="material-icons md-light" onclick="editarItem('${itens[i].id}')">edit</button>`;
        template = template + `<button type="button" class="material-icons md-light" onclick="excluirItem('${itens[i].id}')">delete</button>`;
        template = template + `<p align="right" class="preco">${itens[i].preco}</p>`;
        template = template + '</div>';
        template = template + '</div>';        
    }
    document.querySelector("#listaDeItens").innerHTML = `${template}`;
}

function excluirItem(id) {
    let r = confirm("Você tem certeza que deseja excluir esse elemento?")
    if (r == true) {
        console.log('id ', id);
        let index = itens.findIndex(f => f.id == id);
        itens.splice(index, 1);
        localStorage.setItem('itens', JSON.stringify(itens))
        exibirItens();
    }
}

function editarItem(id) {
    let index = itens.findIndex(f => f.id == id);

    document.querySelector('#idItem').value = itens[index].id
    document.querySelector('#AddInput').value = itens[index].nome
    document.querySelector('#LinkImagem').value = itens[index].link
    document.querySelector('#ItemPreco').value = itens[index].preco
}
