import { createContext, useReducer } from "react";
import { getPreguntas } from "../ConsultasApi/ConsultasPreguntas";
import { ConstOptionReducer } from "../Contantes/ConstantesRoutes";

const initialState = {
    modelos: [],
    entrevistas: [],
    modeloSeleccionado: {},
    preguntas: [],
    newModelo: {
        title: '',
        preguntas: []
    },
    newPregunta: { descripcion: '' }
};

function reducer(state, action) {
    console.log('red');
    switch (action.type) {
        case ConstOptionReducer.modeloSeleccionado:
            return { ...state, modeloSeleccionado: action.payload };
        case ConstOptionReducer.newModelo:
            return { ...state, newModelo: { title: action.payload.title, preguntas: action.payload.preguntas } }
        case ConstOptionReducer.newPregunta:
            return { ...state, newPregunta: { descripcion: action.payload.descripcion } }
        case ConstOptionReducer.getPreguntas:
            return { ...state, preguntas: action.payload }
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
