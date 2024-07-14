import Navbar from './components/Navbar.js'
import Home from './components/Home.js'; 
import Contact from './components/contacto.js'
import ConsultarAlquiler from './components/Consultar.js'
import Categorias from './components/Categorias.js'
import Detalles from './components/Detalle.js'
import Search from './components/Buscador.js'

import './App.css';
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
     <div>
        <Navbar/>
      </div> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/consultar/:id" element={<ConsultarAlquiler />} />    
        <Route path="/categorias/:id" element={<Categorias />} />   
        <Route path="/detalles/:id" element={<Detalles />} />    
        <Route path="/contact" element={<Contact />} />
        <Route path="/buscador" element={<Search />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
