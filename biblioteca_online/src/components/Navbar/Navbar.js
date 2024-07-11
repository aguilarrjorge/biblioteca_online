import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>  
     
         
         
        <lu className='navbar__ul'>
          <li className='nabvar__li nabvar__li--img'>
            <img className='nabvar__li--img' src = {logo}/>  Online Library</li>
         
        </lu>

        <ul className='navbar__ul'>
            <li className='nabvar__li'> Inicio      </li>
            <li className='nabvar__li'> Alquiler    
              <ul class="sub_navbar">
                  <li className='sub_navbar_li'>
                    <a className='sub_navbar_li sub_navbar_li--a' href="#">Consultar alquiler</a>
                  </li>
                  <li className='sub_navbar_li'>
                    <a className='sub_navbar_li sub_navbar_li--a' href="#">alquilar libro</a>
                  </li>                  
              </ul>
            </li>
            <li className='nabvar__li'> Categorias  </li>
            <li className='nabvar__li'> Contacto    </li>
            <li className='nabvar__li nabvar__li--modifer'> Ingresar       </li>
        </ul> 
    </div>
  )
}
