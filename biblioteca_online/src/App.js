import logo from './logo.svg';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'; 
import Contact from './components/contacto.js'
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
     <div>
        <Navbar/>
      </div> 
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
