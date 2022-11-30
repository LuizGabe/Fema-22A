import { useState } from 'react';
import "./Boletim.css";

function App() {

  const [nome, setNome] = useState();
  const [nota1, setNota1] = useState();
  const [nota2, setNota2] = useState();
  const [lista, setLista] = useState([]);


  function adicionar() {
    let pessoa = [nome, parseInt(nota1), parseInt(nota2) ]
    console.log('adicionar ')
    lista.push(pessoa);
    setLista([...lista]);

    console.log('lista ', lista)
  }

  return (
    <div className="container">
      <h1>Aluno - Notas</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" onChange={(event) => setNome(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nota1</label>
          <input type="number" className="form-control" onChange={(event) => setNota1(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Nota2</label>
          <input type="number" className="form-control" onChange={(event) => setNota2(event.target.value)} />
        </div>

        <button type="button" onClick={adicionar}>Adicionar</button>
      </form>

      <ul>
        {
          lista.map((n, index) => {
            return (
                <li>{n[0]} com media de {(n[1]+n[2])/2}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
