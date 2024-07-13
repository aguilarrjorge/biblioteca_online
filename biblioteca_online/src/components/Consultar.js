import React, { useState } from 'react'
import '../styles/consultar.css'
import { useParams } from 'react-router-dom';
import calendar from '../assets/calendar.png'

export default function Consultar() {

 

  let params = useParams()
  console.log("component Consultar")
  console.log(params.id)

 



  return (
    <div className='main'>
    <h2>consultar_alquiler {params.id} </h2>

      <table className='main__table'>
        <tr className='main__table main__table--modifier'>
          <th className=' main__table--modifier--th'>usuario</th>
          <th className=' main__table--modifier--th'>id libro</th>
          <th className=' main__table--modifier--th'>periodo</th>
          <th className=' main__table--modifier--th'>estatus</th>
          <th className=' main__table--modifier--th'>metodo de pago</th>
          <th className=' main__table--modifier--th'>extender plazo</th>
        </tr>
        <tr className='main__table main__table--modifier'>
          <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
          
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
          
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
          <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
          <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
          <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1</td>
          <td className='main__table--modifier--td'>mensual</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>TC</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
      </table>          

   
    </div>

    


  )
}
