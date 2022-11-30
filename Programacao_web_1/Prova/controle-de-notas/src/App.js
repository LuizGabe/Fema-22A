import { useState } from 'react'
import './App1.css';

function App() {
  // Inicializar as variáveis que vamos utilizar
  const [id, setId] = useState();
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [lista, setLista] = useState([]);

  // Função para adicionar um novo aluno ou edita um já existente
  function adicionar() {
    // Verifica se já tem um id
    if (id) {
      // Se sim, procura qual item está sendo editado de acordo com o id informado
      const index = lista.findIndex(n => n.id === id);
      // Edita esse item da lista com os novos valores
      lista[index].nome = nome;
      lista[index].nota1 = parseFloat(nota1);
      lista[index].nota2 = parseFloat(nota2);
      lista[index].nota3 = parseFloat(nota3);
      lista[index].media = ((lista[index].nota1 + lista[index].nota2 + lista[index].nota3) / 3).toFixed(1);

      setLista([...lista]);
    } else {
      // Se não possui id, define um aluno com os dados informados
        let aluno = {
        id:Math.random().toString(36).substring(2),
        nome:nome,
        nota1:parseFloat(nota1),
        nota2:parseFloat(nota2),
        nota3:parseFloat(nota3),
        media:(((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3).toFixed(1))
      }
      // Coloca esse aluno dentro da lista
      lista.push(aluno);
      setLista([...lista]);

      // Limpa formulários
      setId("")
      setNome("")
      setNota1("")
      setNota2("")
      setNota3("")
    }
  }

  // Função que recebe o id e começa sua edição
  function editNota(id) {
    // Identifica qual item da lista vai ser editado e retorna esse item
    const nota = lista.find(n => n.id === id);

    // Coloca nos inputs o valor correspondente para edição
    setId(nota.id);
    setNome(nota.nome);
    setNota1(nota.nota1);
    setNota2(nota.nota2);
    setNota3(nota.nota3)
  }

  // Função que recebe o id e remove da lista
  function removeNota(id) {
    // Identifica qual item da lista vai ser excluido
    let index = lista.findIndex(n => n.id === id)

    // Retira esse item da lista
    lista.splice(index,1)
    setLista([...lista])
  }
  return (
    <div className="container">
      <h1>Controle de Notas</h1>
      <form>
      <div id='formNome'>
        <div className="mb-3" id='divNome'>
          <label className="form-label">Nome: </label>
          <input type="text" className="form-control" id='nome' value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>
        <div id='test2'>
        <div className="mb-3">
          <label className="form-label">Nota 1: </label>
          <input type="number" className="form-control" id='nota1' value={nota1} onChange={(event) => setNota1(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nota 2: </label>
          <input type="number" className="form-control" id='nota2' value={nota2} onChange={(event) => setNota2(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nota 3: </label>
          <input type="number" className="form-control" id='nota3' value={nota3} onChange={(event) => setNota3(event.target.value)} />
        </div>
        </div>
        <button type="button" id='formulario' onClick={adicionar}>Adicionar</button>
        </div>
      </form>
        <table id='tabelinha' className='table mt-3'>
            <thead>
              <tr>
                <th >Nome</th>
                <th >Nota 1</th>
                <th >Nota 2</th>
                <th >Nota 3</th>
                <th >Média</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
              {
                lista.map((n, index) => {           
                  return (
                    <tr key={index}>
                    <td>{n.nome}</td>
                    <td>{n.nota1}</td>
                    <td>{n.nota2}</td>
                    <td>{n.nota3}</td>
                    {/* Identifica se a media é menor que 7 e coloca a classe pVermelho */}
                    <td>{n.media < 7 ? <b className='pVermelho'>{n.media}</b>:<p>{n.media}</p>}</td>
                    <td>
                      <button type="button" className="material-icons md-light" onClick={() => editNota(n.id)} >edit</button>
                      <button type="button" className="material-icons md-light" onClick={() => removeNota(n.id)} >delete</button>
                    </td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
  )
}

export default App;
