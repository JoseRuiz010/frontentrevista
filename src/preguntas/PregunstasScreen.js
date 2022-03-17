import React, { useContext, useEffect, useState } from 'react'
import { urlApi } from '../Contantes/ConstantesRoutes'
import { ModalNewPregunta } from '../Modal/ModalNewPregunta'
import { ContextState } from '../Reducers/ReducerModelo'
import './preguntaScreen.css'
export const PregunstasScreen = () => {

    const [loading, setloading] = useState(true)

    const [preguntasState, setPreguntas] = useState([])

    useEffect(() => {

        (
            async function () {
                setloading(true)
                const preguntas = await fetch(urlApi.preguntas).then(data => data.json())
                setPreguntas(preguntas.map(p => ({ ...p, select: false })));
                setloading(false)
            }
        )()

    }, [])

    const { distpatch } = useContext(ContextState);


    if (loading) return (<div>Cargando...</div>)

    return (
        <div className='modeloEntrevistasContent'>
            <div className='menu'>
                <button className='btn btp cw mt-2' type="button" data-bs-toggle="modal" data-bs-target="#modalPregunta">Nuevo +</button>
            </div>
            <ModalNewPregunta distpatch={distpatch}/>
            <div className='content-card ul'>
                <ul className="list-group list-group-flush">
                    {
                        preguntasState.map(e => (
                            <li className="list-group-item "><b>{e.id}</b>-{e.descripcion}</li>
                        ))
                    }
                </ul>


            </div>
        </div>
    )
}
