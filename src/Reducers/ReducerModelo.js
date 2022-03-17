import { createContext, useReducer } from "react";

const initialState = {
    modelos: [],
    entrevistas: [],
    modeloSeleccionado: {},
    preguntas: [],
    newModelo:{
        title:'',
        preguntas:[]
    },
    newPregunta:{descripcion:''}
};

function reducer(state, action) {
    switch (action.type) {
        case 'modeloSeleccionado':
            return{...state, modeloSeleccionado:action.payload};
        case 'newModelo':
            return {...state, newModelo:{title:action.payload.title,preguntas:action.payload.preguntas}}
        case 'newPregunta':
            return {...state, newPregunta:{descripcion:action.payload.descripcion}}
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
