import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { urlApi } from '../../Contantes/ConstantesRoutes'
import { ModalNewModelo } from '../../Modal/ModalNewModelo'
import { ContextState } from '../../Reducers/ReducerModelo'
import './modeloEntrevista.css'
export const ModeloEntrevistas = () => {
     
    const [loading, setloading] = useState(true)
    const [entrevistasState, setentrevistas] = useState([])
    const [preguntasState, setPreguntas] = useState([])
    const navigate= useNavigate()
    useEffect(() => {

        (
            async function () {
                setloading(true)
                const entrevistas = await fetch(urlApi.entrevistas).then(data => data.json())
                 
                setentrevistas(entrevistas)
                const preguntas = await fetch(urlApi.preguntas).then(data => data.json())
                
                setPreguntas(preguntas.map(p=>({...p,select:false})));
                setloading(false)
            }
        )()

    }, [])

    const {distpatch}= useContext(ContextState);
     

    if (loading) return (<div>Cargando...</div>)
   
    const SeleccionarModelo=(e)=>{

        const action={
            type:'modeloSeleccionado',
            payload:e
        }
        distpatch(action)
        navigate(`/modeloEntrevistas/${e.id}`)
    }

    return (
        <div className='modeloEntrevistasContent'>
            <div className='menu'>
                <button className='btn btp cw mt-2' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Nuevo +</button>
              
            </div>
            <ModalNewModelo distpatch={distpatch} setPreguntas={setPreguntas} preguntas={preguntasState}/>

            <div className='content-card'>
                {
                    entrevistasState.map(e => (
                        <div className="card center" key={e.id} >
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Id:</b>{e.id}</li>
                                <li className="list-group-item"><b>Name:</b> {e.name}</li>
                                <li className="list-group-item "><b>Creada:</b>{e.createAt}</li>
                            </ul>
                            <div className='buttons'>
                                <button className='w-80 btp btn cw' onClick={()=>SeleccionarModelo(e)}>Ver</button>
                                <button className='w-80 bts btn cw'>Resuletas</button>  
                            </div>

                        </div>

                    ))
                }


            </div>
        </div>
    )
}
