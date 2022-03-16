import React from 'react'
import './stylesLogin.css'
import login from './login.svg'

export const Login = () => {
  return (
    <div className='containerLogin'>
       
       <div className='imagenLogin'>
         <img className='imagenL' src={login} alt="" />

       </div>
      <div className='formularioLogin'>
        <h3 className='tituloLogin'>Iniciar Session</h3>
        <input type="text" className='inp' placeholder='Ingrese User' />
        <input type="text" className='inp' placeholder='Ingrese Password'/>
        <button className='button'>Ingresar</button>
      </div>
      </div>
  )
}
