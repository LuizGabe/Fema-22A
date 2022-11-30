import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0)

  function contar() {
    console.log('contar');
    setContador(contador + 1);
  }
  function contarmenos() {
    console.log('contar');
    setContador(contador - 1);
  }
  function reset() {
    console.log('contar');
    setContador(0);
  }

  return (
    <div className="App">
      <p>Contador</p> 

      <p>{contador}</p>

      <button onClick={contar}>Aumentar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={contarmenos}>Diminuir</button>
    </div>
  );
}

export default App;