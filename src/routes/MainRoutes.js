import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Entrevistas } from '../screens/Entrevistas'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/entrevista" element={<Entrevistas />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} /> */}
    </Routes>
  )
}
