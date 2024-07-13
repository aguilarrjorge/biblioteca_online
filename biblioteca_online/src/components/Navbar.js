import React, { useState } from 'react'
import '../styles/Navbar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';


export default function Navbar() {
  
  const [ isVisible, setIsVisible ] = useState(false)   
  const [user, setUser] = useState('');
  
  console.log("a "+ isVisible)
  console.log("User "+ user)


  function update(){
    console.log("valor pasdo")
    console.log('user' + user)
    user == '' ?  console.log('SOY VACIO USER' + user) :  setIsVisible(false)
   
  }
  function update_is_usuario(e){    
    setUser(e.target.value)
    console.log("update is usaurio")
    console.log(e.target.value)
    console.log("user" + user)   
  }

  


  return (
    <div>
      
      <div className='navbar'>  

          <ul className='navbar__ul'>
            <Link to="/" className='navbar__ul navbar__li--link'>
              <li className='nabvar__li nabvar__li--img'>
                <img className='nabvar__li--img' src = {logo}/>  Online Library</li>
                </Link>
          
          </ul>

          <ul className='navbar__ul'>
              <li className='nabvar__li'> 
                  <Link to="/" className='nabvar__li navbar__li--link'> Inicio    </Link> 
              </li>
              <li className='nabvar__li'> Alquiler    
                <ul className="sub_navbar">
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#modal" onClick={() => setIsVisible(!isVisible)}>Consultar alquiler</a>
                    </li>
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Alquiler de nuevo libro</a>
                    </li>                  
                </ul>
              </li>
              <li className='nabvar__li'> Categorias  
              <ul className="sub_navbar">
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="/contact">Literatura</a>
                    </li>
                    <li className='sub_navbar_li'>
                      <Link to={'/categorias/Psicologia'} className='sub_navbar_li sub_navbar_li--a'>Psicologia</Link>
                    </li>   
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Cuentos</a>
                    </li>
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Novelas</a>
                    </li>    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Economia</a>
                    </li>
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Ingenieria</a>
                    </li>    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Computacion</a>
                    </li>
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Leyes</a>
                    </li>   
                    <li className='sub_navbar_li'>
                      <a className='sub_navbar_li sub_navbar_li--a' href="#">Biologia</a>
                    </li>                  
                </ul>
              </li>
              <li className='nabvar__li'> 
                <Link to={'/contact'} className='nabvar__li navbar__li--link'>  Contacto   </Link>  
              </li>
              <li className='nabvar__li nabvar__li--modifer'> Ingresar </li>
          </ul> 
      </div>

     {/*  Modal */}

{
  isVisible ? <div className="modalmask" id='modal' >
                <div className="modalmask__modalbox modalmask__modalbox--movedown">
                    <a className="modalmask__modalbox--close" href="#close" title="Cerrar" onClick={() => setIsVisible(false)}>X</a>
                    <h2 className='modalmask__modalbox--title'>Ingresa tu id de usuario</h2>
                    <form className='modalbox__form'>
                      <input className='modalbox__form--input' type='text' name= 'id_usuario' placeholder='id de usuario' id='idUsuario' value={user} onChange={update_is_usuario}/>
                      { /*<Link to={'/home'} className='modalbox__form--button' onClick={update} disabled> Aceptar </Link> */}
                      { user != '' ? 
                          <Link to={'/consultar/123'}> 
                            <button className='modalbox__form--button' onClick={update}> Aceptar </button> 
                          </Link>
                          : "" }
                    </form>
                </div>
              </div>
            : ("") 
            
            
}


      
    
        
    </div>
  )
}
