import React, { useState } from 'react'
import '../styles/detalles.css'
import { FaStar, FaStarHalfAlt, FaRegStar  } from "react-icons/fa";
import { IoMdReturnLeft } from "react-icons/io";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import getApi from '../hooks/getApi';

export default function Detalle() {

    const [id, setId] = useState(0)
    const [ isVisible, setIsVisible ] = useState(false)   

    let params = useParams()
    console.log("params "+params.id)

    const apiUrl = 'https://jsonplaceholder.typicode.com/users/'+params.id;
    const data= getApi(apiUrl);

    console.log(data);

    function update(){
        alert("Pedido Confirmado")
       
      }
  
 

  return (
    <div>       
     
    { 
        data ? 
            <div className='detalle'>             

                <img className='detalle__img' src={`/images/psicologia/${params.id}.png`}/>

                <div className='detalle__p'>
                    <p>
                    <Link to={'/categorias/Psicologia'}> <IoMdReturnLeft style={{fontSize: '50px'}} title='regresar'/></Link>
                        <p className='categorias__element--p1'><h2>{data.address.street}</h2></p>     
                        <p className='categorias__element--p2'>{data.name}</p>
                        <p className='categorias__element--p3'>No disponible</p>    
                        <p className='categorias__element--p4'>     
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        <FaStar style={{color: '#ebaa20', fontSize: '20px'}}/> 
                        </p>   
                        <p className='categorias__element--p6'> ISBN :1234567891</p>
                        <p className='categorias__element--p7'> <a> Sinopsis de {data.address.street} </a> <br/>
                            ¿Qué es la psicología? ¿Hasta qué punto es científica? ¿Qué es la consciencia? ¿Y los instintos? 
                            Estas son algunas de las muchas preguntas que se plantean todas aquellas personas curiosas y con interés en el mundo 
                            de la psicología y son, también, algunas de las cuestiones que se tratan en este libro.
                            A través de estas páginas podrás realizar un recorrido desde los orígenes de la psicología y las dudas 
                            fundamentales con las que comienza el estudio de la conducta humana, hasta las investigaciones recientes en este ámbito, 
                            pasando por las principales corrientes psicológicas y los personajes más destacados de esta disciplina. 
                            
                        </p>
                    </p>
                    <div className='detalle__button'> 
                        <a className='detalle__buttonAlquilar' href="#modal"> Alquilar </a>
                    </div>
                </div>
            </div>
        :('')
    }

            <div className="modalmask" id='modal' >
                <div className="modalmask__modalbox modalmask__modalbox--movedown">
                    <a className="modalmask__modalbox--close" href="#close" title="Cerrar" onClick={() => setIsVisible(false)}>X</a>
                    <h2 className='modalmask__modalbox--title'>Complete los campos</h2>
                    <form className='modalbox__form'>
                        <div className='modalbox__form--title' > *  Id de usuario </div>
                            <input className='modalbox__form--input' type='text' name= 'id_usuario' value = '123' placeholder='id de usuario'/>
                        <div className='modalbox__form--title' > Metodo de pago </div>                            
                            <select className='modalbox__form--input'>
                                <option value="tc"> Tarjeta de crédito</option>
                                <option value="trans"> Transferencia electrónica</option>
                                <option value="paypal"> Paypal</option>
                            </select>
                        <div className='modalbox__form--title' > Desde </div>
                            <input className='modalbox__form--input' type='date' name = 'periodo_inicial'/>
                        <div className='modalbox__form--title' > Hasta </div>
                            <input className='modalbox__form--input' type='date' name = 'periodo_final'/>
                        
                        <button className='modalbox__form--button' onClick={update}> Aceptar </button>                           
                    </form>
                </div>
            </div>
      
    </div>
  )
}
