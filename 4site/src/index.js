import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/home/home'
import Login from './pages/login/login.js'
import ADM from './pages/inicio ADM/adm.js'
import CadastroPedidos from './pages/cadastrospeds/ped'
import Pedidos from './pages/pedidos/pedidos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/ADM'  element={<ADM />} />
        <Route path='/Cadastro-Pedidos'  element={<CadastroPedidos />}/>
        <Route path='/Alterar/:idParam'  element={<CadastroPedidos />}/>  
        <Route path='/pedidos'  element={< Pedidos />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

