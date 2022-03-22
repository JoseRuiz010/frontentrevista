import React, { useContext, useEffect, useState } from 'react'
import { ContextEvaluacion, ContextEvaluacionProvider } from './ContextEvaluacion/EvaluacionContext'

import './evaluacion.css'
import { EvaluacionItems } from './EvaluacionItems'


export const Evaluacion = ({ puntuacion, data }) => {


    const { stateEvaluacion, setPuntuacion, setData } = useContext(ContextEvaluacion);


    useEffect(() => {
        setData(data)
        setPuntuacion(puntuacion)
    }, [])

    
    if (stateEvaluacion.respuestas == '') return <div>Cargando..</div>
    return (
        <div className="cuerpo">

            {
                stateEvaluacion.respuestas.map((d, i) => (
                    <EvaluacionItems key={i + Date.now()} data={d} />
                ))
            }

        </div >

    )
}

