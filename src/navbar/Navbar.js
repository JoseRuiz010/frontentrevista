import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbarStyles.css'
export const  Navbar= () => {
    return (
        <nav className='nav'>
            <h2>Logo</h2>
            <ul>
                <li><NavLink to={'/entrevistas'}>Entrevistas</NavLink></li>
                <li><NavLink to={'/modeloEntrevistas'}>Modelos Entrevistas</NavLink></li>
                <li><NavLink to={'/pregunta'}>Preguntas</NavLink></li>
            </ul>
        </nav>
    )
}
