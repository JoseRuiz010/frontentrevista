

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
    }
}; 