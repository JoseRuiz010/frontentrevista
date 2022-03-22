import React, { useContext, useEffect, useState } from 'react'
import { ContextEvaluacion } from './ContextEvaluacion/EvaluacionContext'

export const ValorRespuesta = ({ data }) => {


    const { stateEvaluacion, setRespuesta } = useContext(ContextEvaluacion)
    const puntuacion = stateEvaluacion.puntuacion

    const [valores, setvalores] = useState([])

    useEffect(() => {
        setvalores([...Array(puntuacion + 1).keys()].map(v => ({ valor: v, select: false })))
    }, [])


    if (valores.length === 0) return <div>Cagando...</div>
    return (
        <div className='puntuacion' >
             {valores.slice(1, 11).map(p => (
                <div className={`puntuacion-Items ${data.valor === p.valor ? 'selectValor' : ''}`} key={p + Math.random()} onClick={() => {
                    (setRespuesta({ ...data, valor: p.valor }))

                }}>
                    <span>{p.valor}</span>
                </div>
            ))
            } 


        </div >
    )
}
