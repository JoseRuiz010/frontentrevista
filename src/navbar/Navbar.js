import React from 'react'
import { NavLink } from 'react-router-dom'
import { nameRoute } from '../Contantes/ConstantesRoutes'
import './navbarStyles.css'
export const  Navbar= () => {
    return (
        <nav className='nav'>
            <h2>Logo</h2>
            <ul>
                <li><NavLink to={nameRoute['/entrevistas']}>Entrevistas</NavLink></li>
                <li><NavLink to={nameRoute['/modeloEntrevistas']}>Modelos Entrevistas</NavLink></li>
                <li><NavLink to={nameRoute['/pregunta']}>Preguntas</NavLink></li>
            </ul>
        </nav>
    )
}
