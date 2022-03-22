export const typeEvaluacion = {
    SET_DATA: 'SET_DATA',
    SET_DATA_RES: 'SET_DATA_RES',
    SET_PUNTUACION: "SET_PUNTUACION",
    SET_RESPUESTA: "SET_RESPUESTA"
}

export const ReducerEvaluacion = (stateEvaluacion, action) => {
    switch (action.type) {
        case typeEvaluacion.SET_DATA:
            return {
                ...stateEvaluacion,
                respuestas: action.payload.map(d => ({ ...d, valor: '' }))
            }

        case typeEvaluacion.SET_DATA_RES:
            return {
                ...stateEvaluacion,
                DataRespuesta: action.payload.map(d => ({ ...d, valor: '' }))
            }
        case typeEvaluacion.SET_PUNTUACION:
            return {
                ...stateEvaluacion,
                puntuacion: action.payload
            }
        case typeEvaluacion.SET_RESPUESTA:
            return {
                ...stateEvaluacion,
                respuestas: stateEvaluacion.respuestas.map(d => d.id == action.payload.id ? action.payload : d)
            }
    }
}

