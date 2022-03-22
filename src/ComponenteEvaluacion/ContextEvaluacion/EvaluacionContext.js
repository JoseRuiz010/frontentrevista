import { createContext, useReducer, useState } from "react";
import { ReducerEvaluacion, typeEvaluacion } from "./ReducerEvaluacion";

export const ContextEvaluacion = createContext()

const initialState =
{
    puntuacion: '',
    respuestas: '',
    DataRespuesta: ''
}



export const ContextEvaluacionProvider = ({ children }) => {


    const [stateEvaluacion, dispatch] = useReducer(ReducerEvaluacion, initialState)

    const setPuntuacion = (puntuacion) => {
        dispatch({
            type: typeEvaluacion.SET_PUNTUACION,
            payload: puntuacion
        })
    }

    const setData = (data) => {
        dispatch({
            type: typeEvaluacion.SET_DATA,
            payload: data
        })

    }
    const setRespuesta = (data) => {
        dispatch({
            type: typeEvaluacion.SET_RESPUESTA,
            payload: data
        })
    }
    return (
        <ContextEvaluacion.Provider value={{ stateEvaluacion, setPuntuacion, setData, setRespuesta }}>
            {children}
        </ContextEvaluacion.Provider>
    )
}
