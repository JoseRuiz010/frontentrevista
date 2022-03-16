import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextState } from '../../Reducers/ReducerModelo';

export const DetalleModelo = () => {
    const params = useParams()
 
    const {state,distpatch}= useContext(ContextState);
     
    const {name,createAt,preguntas}=state.modeloSeleccionado;
    console.log(name,createAt,preguntas);
     
console.log(params);
    return (
        <div>
            <div className="card w80 mt40"  >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name: {name}</li>
                    <li className="list-group-item">Creado: {createAt}</li>
                    {
                        preguntas.map((p,i)=>(
                            <li  key={p} className="list-group-item">{i+1}-{p.descripcion}</li>

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
