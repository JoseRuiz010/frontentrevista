

export const ReducerGlobal = (globalState, action) => {
    switch (action.type) {
        case "GET_PREGUNTAS":
            return {
                ...globalState,
                preguntas: action.payload,
            };

        case "ADD_PREGUNTAS":
            return {
                ...globalState,
                preguntas: [...globalState.preguntas, action.payload],
            };
        case "CHANGE_PREGUNTA":
            return {
                ...globalState,
                preguntas: [...globalState.preguntas.map(p => p.id === action.payload.id ? action.payload : p)],
            };

        case "GET_MODELOS":
            return {
                ...globalState,
                modelosEntrevistas: action.payload,
            };

        case "ADD_MODELO":
            return {
                ...globalState,
                modelosEntrevistas: [...globalState.modelosEntrevistas, { name: action.payload.name, createAt: new Date(), preguntas: action.payload.preguntas }],
            };
        case "SELECCIONAR_MODELO":
            return {
                ...globalState,
                modeloSeleccionado:
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    createAt: action.payload.createAt,
                    preguntas: action.payload.preguntas.map(p => ({ ...p, select: true }))
                },
            };
        case "GET_ENTREVISTADO":
            return {
                ...globalState,
                entrevistado: action.payload,
            };
        case "GET_ENTREVISTADOR":
            return {
                ...globalState,
                entrevistador: action.payload,
            };

    }
}; 