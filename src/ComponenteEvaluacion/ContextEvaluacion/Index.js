import React from 'react'
import { Evaluacion } from '../Evaluacion'
import { ContextEvaluacionProvider } from './EvaluacionContext'

export const Index = ({ puntuacion, data }) => {

    return (
        <ContextEvaluacionProvider>
            <Evaluacion puntuacion={puntuacion} data={data} />
        </ContextEvaluacionProvider>
    )
}
