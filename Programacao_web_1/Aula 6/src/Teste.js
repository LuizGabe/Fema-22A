import React, { useState } from 'react';
import './Teste.css'
export default function Teste() {
    const [count, setCount] = useState(0);
    return (
    <div id='content'>
        <h1>{count}</h1>
        <div id='botoes'>
        <button id='add' onClick={() => setCount(count + 1)}>Adicionar</button>
        <button id='reset' onClick={() => setCount(0)}>Resetar</button>
        <button id='sub' onClick={() => setCount(count - 1)}>Diminuir</button>
        </div>
    </div>
        )
}