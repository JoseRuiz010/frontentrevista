import { useReducer } from "react"
import { addModelo, addPregunta, getEntrevistado, getEntrevistador, getModelo, getPreguntas } from "../ConsultasApi/ConsultasPreguntas"
import GlobalContext from "./GlobalContext"
import { ReducerGlobal } from "./ReducerGlobal"




export const StateGlobal = ({ children }) => {
    const init = {
        preguntas: [],
        modelosEntrevistas: [],
        entrevistas: [],
        modeloSeleccionado: {},
        entrevistado: [],
        entrevistador: []
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
    const ChangePregunta = async (data) => {
        dispatch(
            {
                type: 'CHANGE_PREGUNTA',
                payload: data
            }
        )
    }
    const GetModelo = async () => {
        const modelos = await getModelo();
        dispatch(
            {
                type: 'GET_MODELOS',
                payload: modelos
            }
        )
    }
    const AddModelo = async (data) => {
        const preguntas = await addModelo(data);
        dispatch(
            {
                type: 'ADD_MODELO',
                payload: data
            }
        )
    }
    const SeleccionarModelo = async (data) => {
        const preguntas = await addPregunta(data);
        dispatch(
            {
                type: 'SELECCIONAR_MODELO',
                payload: data
            }
        )

    }
    const GetEntrevistado = async () => {
        const entrevistados = await getEntrevistado()

        dispatch(
            {
                type: 'GET_ENTREVISTADO',
                payload: entrevistados
            }
        )
    }
    const GetEntrevistador = async () => {
        const entrevistadores = await getEntrevistador()

        dispatch(
            {
                type: 'GET_ENTREVISTADOR',
                payload: entrevistadores
            }
        )
    }


    return (

        <GlobalContext.Provider value={{
            preguntas: globalState.preguntas,
            modelos: globalState.modelosEntrevistas,
            modeloSeleccionado: globalState.modeloSeleccionado,
            entrevistado: globalState.entrevistado,
            entrevistador: globalState.entrevistador,
            GetPreguntas,
            AddPreguntas,
            ChangePregunta,
            GetModelo,
            AddModelo,
            SeleccionarModelo,
            GetEntrevistado,
            GetEntrevistador
        }}>
            {children}

        </GlobalContext.Provider>
    )
}
