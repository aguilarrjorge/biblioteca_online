import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/contact.css'

export default function contacto() {
  return (
    <div className='contacto'>
        <div className='contacto__element'>      
        <iframe className='contacto_elemento--maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6327.805462028562!2d-99.14241810409683!3d19.432459650846628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f932c627afe1%3A0x914f3df027515f27!2sCatedral%20Metropolitana%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1721007391427!5m2!1ses!2smx" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


    
  </div>
  )
}
