import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextState } from '../../Reducers/ReducerModelo';

export const DetalleModelo = () => {
    const params = useParams()

    const { state } = useContext(ContextState);

    const { name, createAt, preguntas } = state.modeloSeleccionado;
    
    return (
        <div>
            
            <div class="card w60 mt40"  >
                
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">createAt: {createAt}</p>
                    </div>
                     
                    <ul className="list-group list-group-flush">
                        {
                            preguntas.length===0&&<li className="list-group-item">No tiene preguntas</li>
                        }
                    {
                        preguntas.map((p, i) => (
                            <li key={p} className="list-group-item">{i + 1}-{p.descripcion}</li>

                        ))
                    }
                    </ul>
                    
            </div>
        </div>
    )
}
