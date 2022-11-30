import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { AvatarCadastro } from './components/avatar/AvatarCadastro';
import { AvatarList } from './components/avatar/AvatarList';
import { Home } from './components/home/Home'

export default function App() {
  return (
    <>

      <ul>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/avatar'}>Avatar</Link> </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<AvatarList />} />
        <Route path="/avatar/cadastro" element={<AvatarCadastro />} />
      </Routes>

    </>
  );
}
