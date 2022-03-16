import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { Navbar } from '../navbar/Navbar'
import { Entrevistas } from '../screens/Entrevistas'
import { Login } from '../screens/Login/Login'
import { DetalleModelo } from '../screens/ModeloEntrevistas/DetalleModelo'
import { ModeloEntrevistas } from '../screens/ModeloEntrevistas/ModeloEntrevistas'

export const IndexRoutes = () => {
    return (
        <div>

            <Navbar/>
        <Routes>
            <Route path="/" element={<App />} ></Route>
            <Route path='/entrevistas' element={<Entrevistas />}></Route>
            <Route path='/modeloEntrevistas' element={<ModeloEntrevistas />}></Route>
            <Route path='/modeloEntrevistas/:id' element={<DetalleModelo />}></Route>
            <Route path="/login" element={<Login />} />
        </Routes>
        </div>
    )
}
