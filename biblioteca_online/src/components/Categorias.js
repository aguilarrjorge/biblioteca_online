import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/categorias.css'
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar  } from "react-icons/fa";
import getApi from '../hooks/getApi';
import Search from './Buscador.js'

export default function Categorias() {

  const [value, setValue] = useState(0)
  const [data, setData] = useState(null);
  const [bookTitle, setBookTitle] = useState(null)

  const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  const data2= getApi(apiUrl);
  console.log("desde categoreias")
  console.log(JSON.stringify(data2, null, 2))

  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(data2);
  

    

  return (
    <div>Categorias 
      <div className="Categorias">
        <div className='Categorias__element'>          
          <p className='Categorias__element--p'> Libreria Online Alquiler de libros </p>
        </div>
      </div>

      <pre>{
      //JSON.stringify(data2, null, 2)
      }</pre>
    
    <div className="categorias">
    
      <Search/>
      
    

{data2 &&
        data2.map((item) => {
          return <> 
            <div className='categorias__element'>
            <Link className='categorias__element--link' to={`/detalles/${item.userId}`} >
              <img className="categorias__element--img" src={`/images/psicologia/${item.userId}.png`} alt="" />       
              <div className='categorias__element2'>
                  <p className='categorias__element--p1'>{item.title}</p>
                  <p className='categorias__element--p2'>ADRIAN BERTRAND</p>
                  <p className='categorias__element--p3'>No disponible</p>    
                  <p className='categorias__element--p4'> 
                    <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                    <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                    <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                    <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                    <FaStarHalfAlt style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  </p>   
                  <p className='categorias__element--p5'> $150.00 {item.userId} </p>
                </div>                 
            </Link>
        </div>
          </>;
        })}
        
        
   
      {/*
        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/1'} >
            <img className="categorias__element--img" src='/images/psicologia/psicologicamente.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>PSICOLOGICAMENTE HABLANDO</p>
                <p className='categorias__element--p2'>ADRIAN BERTRAND</p>
                <p className='categorias__element--p3'>No disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStarHalfAlt style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $150.00 </p>
              </div>                 
            </Link>
        </div> 
        
        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/2'} >
            <img className="categorias__element--img" src='/images/psicologia/ciencia.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>LA CIENCIA DE LA PSICOLOGIA</p>
                <p className='categorias__element--p2'>J.R KANTOR</p>
                <p className='categorias__element--p3'>Disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaRegStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaRegStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $80.00 </p>
              </div>                 
            </Link>
        </div>

        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/3'} >
            <img className="categorias__element--img" src='/images/psicologia/autocomunicacion.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>LA FACULTAD DE LA INTERPRETACION</p>
                <p className='categorias__element--p2'>BRENDA QUIROZ R</p>
                <p className='categorias__element--p3'>Disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $380.00 </p>
              </div>                 
            </Link>
        </div>

        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/4'} >
            <img className="categorias__element--img" src='/images/psicologia/yo_quiero_ser_feliz.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>YO QUIERO SER FELIZ ¿Y TU?</p>
                <p className='categorias__element--p2'>DR. ARODI MARTINEZ</p>
                <p className='categorias__element--p3'>Disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaRegStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $120.00 </p>
              </div>                 
            </Link>
        </div>

        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/1'} >
            <img className="categorias__element--img" src='/images/psicologia/psicologicamente.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>PSICOLOGICAMENTE HABLANDO</p>
                <p className='categorias__element--p2'>ADRIAN BERTRAND</p>
                <p className='categorias__element--p3'>No disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStarHalfAlt style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $150.00 </p>
              </div>                 
            </Link>
        </div> 

        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/2'} >
            <img className="categorias__element--img" src='/images/psicologia/ciencia.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>LA CIENCIA DE LA PSICOLOGIA</p>
                <p className='categorias__element--p2'>J.R KANTOR</p>
                <p className='categorias__element--p3'>Disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaRegStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaRegStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $80.00 </p>
              </div>                 
            </Link>
        </div>

        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/3'} >
            <img className="categorias__element--img" src='/images/psicologia/autocomunicacion.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>LA FACULTAD DE LA INTERPRETACION</p>
                <p className='categorias__element--p2'>BRENDA QUIROZ R</p>
                <p className='categorias__element--p3'>Disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $380.00 </p>
              </div>                 
            </Link>
        </div>

        <div className='categorias__element'>
          <Link className='categorias__element--link' to={'/detalles/4'} >
            <img className="categorias__element--img" src='/images/psicologia/yo_quiero_ser_feliz.png' alt="" />       
            <div className='categorias__element2'>
                <p className='categorias__element--p1'>YO QUIERO SER FELIZ ¿Y TU?</p>
                <p className='categorias__element--p2'>DR. ARODI MARTINEZ</p>
                <p className='categorias__element--p3'>Disponible</p>    
                <p className='categorias__element--p4'> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                  <FaRegStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                </p>   
                <p className='categorias__element--p5'> $120.00 </p>
              </div>                 
            </Link>
        </div>
        */
       
      }
      
    </div>

    </div>
  )
}
