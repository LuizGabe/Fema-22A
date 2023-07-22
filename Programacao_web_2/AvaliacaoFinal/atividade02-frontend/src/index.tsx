import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Add from './pages/Add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/adicionar" element={<Add />} />
    </Routes>
  </BrowserRouter>
);
