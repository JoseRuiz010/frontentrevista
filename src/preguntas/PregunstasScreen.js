import React, { useContext, useEffect, useState } from 'react'
import { getPreguntas } from '../ConsultasApi/ConsultasPreguntas'
import GlobalContext from '../context/GlobalContext'

import { ModalNewPregunta } from '../Modal/ModalNewPregunta'
import { ContextState } from '../Reducers/ReducerModelo'

import './preguntaScreen.css'
export const PregunstasScreen = () => {

    const [loading, setloading] = useState(true)

    const [preguntasState, setPreguntas] = useState([])
    const { preguntas, GetPreguntas } = useContext(GlobalContext);

    useEffect(() => {
        console.log('Buscando...');

        (
            async function () {
                setloading(true)
                await GetPreguntas()
                setloading(false)
            }
        )()

    }, [])





    if (loading) return (<div>Cargando...</div>)

    return (
        <div className='modeloEntrevistasContent'>
            <div className='menu'>
                <button className='btn btp cw mt-2' type="button" data-bs-toggle="modal" data-bs-target="#modalPregunta">Nuevo +</button>
            </div>
            <ModalNewPregunta distpatch={'distpatch'} />
            <div className='contesnt-Preguntas'>
                <ul className="db list-group list-group-flush">
                    {
                        preguntas.map((e, i) => (
                            <>
                                <li className="list-group-item  item"><b>{i + 1}</b>-{e.descripcion}</li>

                            </>
                        ))
                    }
                </ul>


            </div>
        </div>
    )
}
