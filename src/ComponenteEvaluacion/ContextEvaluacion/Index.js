import React from 'react'
import { Evaluacion } from '../Evaluacion'
import { ContextEvaluacionProvider } from './EvaluacionContext'

export const Index = ({ puntuacion, data }) => {
    console.log(data);
    return (
        <ContextEvaluacionProvider>
            <Evaluacion puntuacion={puntuacion} data={data} />
        </ContextEvaluacionProvider>
    )
}
