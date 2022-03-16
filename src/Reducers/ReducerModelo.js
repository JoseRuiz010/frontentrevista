import { createContext, useReducer } from "react";

const initialState = {
    modelos: [],
    entrevistas: [],
    modeloSeleccionado: {},
    preguntas: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'modeloSeleccionado':
            return{...state, modeloSeleccionado:action.payload};
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}


export const ContextState = createContext();
export const ContextProvider = ({ children }) => {
    const [state, distpatch] = useReducer(reducer, initialState);
   

    return (
        <ContextState.Provider value={{ state, distpatch }}>
            {children}
        </ContextState.Provider>
    )


}
