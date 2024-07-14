import React, { useState } from 'react'
import '../styles/detalles.css'
import { FaStar, FaStarHalfAlt, FaRegStar  } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import getApi from '../hooks/getApi';

export default function Detalle() {

    const [id, setId] = useState(0)

    let params = useParams()
    console.log("params "+params.id)

    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/'+params.id;
    const data= getApi(apiUrl);

    console.log(data);

    const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);
  
 

  return (
    <div>       

    { 
        data ? 
            <div className='detalle'>             

                <img className='detalle__img' src={`/images/psicologia/${params.id}.png`}/>

                <div className='detalle__p'>
                    <p>
                        
                        <p className='categorias__element--p1'><h2>{data.title}</h2></p>     
                        <p className='categorias__element--p2'>ADRIAN BERTRAND</p>
                        <p className='categorias__element--p3'>No disponible</p>    
                        <p className='categorias__element--p4'> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        </p>   
                        <p className='categorias__element--p6'> ISBN :1234567891</p>
                        <p className='categorias__element--p7'> <a> Sinopsis de {data.title} </a> <br/>
                            ¿Qué es la psicología? ¿Hasta qué punto es científica? ¿Qué es la consciencia? ¿Y los instintos? 
                            Estas son algunas de las muchas preguntas que se plantean todas aquellas personas curiosas y con interés en el mundo 
                            de la psicología y son, también, algunas de las cuestiones que se tratan en este libro.
                            A través de estas páginas podrás realizar un recorrido desde los orígenes de la psicología y las dudas 
                            fundamentales con las que comienza el estudio de la conducta humana, hasta las investigaciones recientes en este ámbito, 
                            pasando por las principales corrientes psicológicas y los personajes más destacados de esta disciplina. 
                            Además, aprenderás algunos de los principios fundamentales acerca de cómo actuamos, cómo sentimos y cómo nos relacionamos. 
                            En definitiva, este es un libro pensado para que conozcas de forma amena la psicología y sus temas de estudio más interesantes.
                        </p>
                    </p>
                    <div className='detalle__button'> 
                        <Link className='detalle__buttonAlquilar'> Alquilar </Link>
                    </div>
                </div>
            </div>
        :('')
    }

      
    </div>
  )
}
