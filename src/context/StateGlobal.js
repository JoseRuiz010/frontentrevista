import { useReducer } from "react"
import { addPregunta, getPreguntas } from "../ConsultasApi/ConsultasPreguntas"
import GlobalContext from "./GlobalContext"
import { ReducerGlobal } from "./ReducerGlobal"




export const StateGlobal = ({ children }) => {
    const init = {
        preguntas: [],
        modelosEntrevistas: [],
        entrevistas: []
    }

    const [globalState, dispatch] = useReducer(ReducerGlobal, init)



    const GetPreguntas = async () => {
        const preguntas = await getPreguntas();
        dispatch(
            {
                type: 'GET_PREGUNTAS',
                payload: preguntas
            }
        )
    }
    const AddPreguntas = async (data) => {
        const preguntas = await addPregunta(data);
        dispatch(
            {
                type: 'ADD_PREGUNTAS',
                payload: data
            }
        )
    }

    return (

        <GlobalContext.Provider value={{
            preguntas: globalState.preguntas,
            GetPreguntas,
            AddPreguntas
        }}>
            {children}

        </GlobalContext.Provider>
    )
}
