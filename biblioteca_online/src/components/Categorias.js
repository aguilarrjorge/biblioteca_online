import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/categorias.css'

export default function Categorias() {

    let params = useParams()
    console.log(params.id)

  return (
    <div>Categorias {params.id} 
    
    
    <div className="categorias">
        <div className='categorias__element'>
            <img className="categorias__element--img" src='/images/psicologia/psicologicamente.png' alt="" /> 
            <div className='categorias__element--p'>
            <p>Psicologicamente hablando</p>
            <p>Adrian Bertrand, Jonathan</p>
            <p>2011</p>
            </div>

           
        </div>               
    
    
                    
    </div>

    </div>
  )
}
