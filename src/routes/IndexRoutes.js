import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { nameRoute } from '../Contantes/ConstantesRoutes'
import { Navbar } from '../navbar/Navbar'
import { PregunstasScreen } from '../preguntas/PregunstasScreen'
import { Entrevistas } from '../screens/Entrevistas'
import { Login } from '../screens/Login/Login'
import { DetalleModelo } from '../screens/ModeloEntrevistas/DetalleModelo'
import { ModeloEntrevistas } from '../screens/ModeloEntrevistas/ModeloEntrevistas'

export const IndexRoutes = () => {

    return (
        <div>

            <Navbar />
            <Routes>
                <Route path={nameRoute['/entrevistas']} element={<Entrevistas />}></Route>
                <Route path={nameRoute['/modeloEntrevistas']} element={<ModeloEntrevistas />}></Route>
                <Route path={nameRoute['/modeloEntrevistas/:id']} element={<DetalleModelo />}></Route>
                <Route path={nameRoute['/pregunta']} element={<PregunstasScreen />}></Route>
                <Route path={nameRoute['/login']} element={<Login />} />
                <Route path="*" element={<Entrevistas />}
                />
            </Routes>
        </div>
    )
}
