import React from 'react'
import getApi from '../hooks/getApi'


export default function Administrador() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    const data2= getApi(apiUrl);

    function createBook(){
        alert("Libro Creado Correctamente")
        window.location.href = "/administrador"
    }

  return (
    <div>
        <h2> Administrador del sistema </h2>
        <a href='#modalBook'> Agregar nuevo libro  </a>

        <table className='main__table'>
            <tr className='main__table main__table--modifier'>          
            <th className=' main__table--modifier--th'>id libro</th>
            <th className=' main__table--modifier--th'>Nombre</th>
            <th className=' main__table--modifier--th'>Autor</th>
            <th className=' main__table--modifier--th'>año de publicacion</th>
            <th className=' main__table--modifier--th'>Codigo ISBN</th>
            <th className=' main__table--modifier--th'>Portada</th>
            <th className=' main__table--modifier--th'>Disponibilidad</th>
            <th className=' main__table--modifier--th'>Costo</th>
            </tr>

    {data2 &&
            data2.map((item) => {
            return <> 
                
                    <tr className='main__table main__table--modifier'>
                    <td className='main__table--modifier--td'>{item.id}</td>
                    <td className='main__table--modifier--td'>{item.title}</td>
                    <td className='main__table--modifier--td'>Felipe Ortiz R</td>
                    <td className='main__table--modifier--td'>2024</td>
                    <td className='main__table--modifier--td'>123456789{item.i}</td>
                    <td className='main__table--modifier--td'><img  src={`/images/psicologia/${item.userId}.png`} width="50px"/></td>
                    <td className='main__table--modifier--td'>Disponible</td>
                    <td className='main__table--modifier--td'>${item.id}.00</td>
                    </tr>
                        
                
                </>;
            })}
        </table> 

        <div className="modalmask" id='modalBook' >
            <div className="modalmask__modalbox modalmask__modalbox--movedown">
                <a className="modalmask__modalbox--close" href="#close" title="Cerrar">X</a>
                <h2 className='modalmask__modalbox--title'>Datos del nuevo libro</h2>
                
                    <div className='modalbox__form--title' > *  Nombre</div>
                        <input className='modalbox__form--input' type='text' name= 'id_usuario'  placeholder='nombre del libro'/>

                        <div className='modalbox__form--title' > *  Autor</div>
                        <input className='modalbox__form--input' type='text' name= 'id_usuario'  placeholder='Autor'/>

                        <div className='modalbox__form--title' > *  Año de publicación</div>
                        <input className='modalbox__form--input' type='text' name= 'id_usuario'  placeholder='Año de publicación'/>

                        <div className='modalbox__form--title' > *  ISBN</div>
                        <input className='modalbox__form--input' type='text' name= 'id_usuario'  placeholder='ISBN'/>

                        <div className='modalbox__form--title' > *  imagen de portada</div>
                        <input className='modalbox__form--input' type='file' name= 'id_usuario'  placeholder='Autor'/>

                    <div className='modal__button--m2'>
                    <button className='modalbox__form--button' onClick={createBook}> Guardar </button>                          
                    </div>
                
            </div>
        </div>

    </div>
    
  )
}
