import React from 'react'
import { NavLink } from 'react-router-dom'
import { nameRoute } from '../Contantes/ConstantesRoutes'
import './navbarStyles.css'
export const Navbar = () => {
    return (
        <nav className='nav'>
            <h2>Logo</h2>
            <ul>
                <li><NavLink style={({ isActive }) => { return { color: isActive ? "#ffffff" : "#a4a4ac" } }}
                    to={nameRoute['/entrevistas']}>Entrevistas</NavLink></li>
                <li><NavLink style={({ isActive }) => { return { color: isActive ? "#ffffff" : "#a4a4ac" } }}
                    to={nameRoute['/modeloEntrevistas']}>Modelos Entrevistas</NavLink></li>
                <li><NavLink style={({ isActive }) => { return { color: isActive ? "#ffffff" : "#a4a4ac" } }}
                    to={nameRoute['/pregunta']}>Preguntas</NavLink></li>
            </ul>
        </nav>
    )
}
