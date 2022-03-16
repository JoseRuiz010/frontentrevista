import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { ContextState } from '../../Reducers/ReducerModelo'
import './modeloEntrevista.css'
export const ModeloEntrevistas = () => {
    const api = `http://localhost:3000/modeloEntrevista`

    const [loading, setloading] = useState(true)
    const [entrevistasState, setentrevistas] = useState([])
    const navigate= useNavigate()
    useEffect(() => {

        (
            async function () {
                setloading(true)
                const entrevistas = await fetch(api).then(data => data.json())
                console.log(entrevistas);
                setentrevistas(entrevistas)
                setloading(false)
            }
        )()

    }, [api])

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
                <button className='btn btp cw mt-2'>Nuevo +</button>
            </div>
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
