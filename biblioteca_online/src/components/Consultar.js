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
          <td className='main__table--modifier--td'>196</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>Entregado</td>
          <td className='main__table--modifier--td'>Tarjeta de crédito</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>133</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>Paypal</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
          
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>123</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>En espera de recoger</td>
          <td className='main__table--modifier--td'>Tarjeta de crédito</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
          
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>231</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>finalizado</td>
          <td className='main__table--modifier--td'>Deposito</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
          <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>33</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>Deposito</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
          <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>13</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>Tarjeta de crédito</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
          <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>15</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>En espera de recoger</td>
          <td className='main__table--modifier--td'>Paypal</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>1369</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>finalizado</td>
          <td className='main__table--modifier--td'>deposito</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>132</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>pendiente</td>
          <td className='main__table--modifier--td'>Tarjeta de crédito</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
        <tr className='main__table main__table--modifier'>
         <td className='main__table--modifier--td'>Alfreds Futterkiste</td>
          <td className='main__table--modifier--td'>178</td>
          <td className='main__table--modifier--td'>01/07/2024 - 31/07/2024</td>
          <td className='main__table--modifier--td'>En espera de recoger</td>
          <td className='main__table--modifier--td'>paypal</td>
          <td className='main__table--modifier--td'><img src={calendar}  width='30px'/></td>
        </tr>
      </table>          

   
    </div>

    


  )
}
