import React, { useContext, useEffect, useState } from 'react'
import { getPreguntas } from '../ConsultasApi/ConsultasPreguntas'

import { ModalNewPregunta } from '../Modal/ModalNewPregunta'
import { ContextState } from '../Reducers/ReducerModelo'

import './preguntaScreen.css'
export const PregunstasScreen = () => {

    const [loading, setloading] = useState(true)

    const [preguntasState, setPreguntas] = useState([])
    const { state, distpatch } = useContext(ContextState);

    useEffect(() => {
        console.log('Buscando...');

        (
            async function () {
                setloading(true)
                await getPreguntas(distpatch);
                setloading(false)
            }
        )()

    }, [])
    useEffect(() => {



    }, [])




    if (loading) return (<div>Cargando...</div>)

    return (
        <div className='modeloEntrevistasContent'>
            <div className='menu'>
                <button className='btn btp cw mt-2' type="button" data-bs-toggle="modal" data-bs-target="#modalPregunta">Nuevo +</button>
            </div>
            <ModalNewPregunta distpatch={distpatch} />
            <div className='contesnt-Preguntas'>
                <ul className="db list-group list-group-flush">
                    {
                        state.preguntas.map(e => (
                            <li className="list-group-item  item"><b>{e.id}</b>-{e.descripcion}</li>
                        ))
                    }
                </ul>


            </div>
        </div>
    )
}
