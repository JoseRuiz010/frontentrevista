

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
                modelosEntrevistas: [...globalState.modelosEntrevistas, action.payload],
            };
    }
}; 