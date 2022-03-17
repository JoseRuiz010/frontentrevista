import React, { useState } from 'react'
import './modal.css'

export const ModalNewPregunta = ({distpatch}) => {
    

    const [preguntasState, setpreguntasState] = useState({
        title: '',
       
    })

    const onchange = (e) => {
        e.preventDefault();
        setpreguntasState({ ...preguntasState, title: e.target.value })
    }
    const finalizar = () => {
       
       distpatch({ type: 'newPregunta', payload: { descripcion:preguntasState.title} })
    }


    return (
        <div>
            <div className="modal fade" id="modalPregunta" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">New Pregunta</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label className="form-label">Descripcion</label>
                                <input onChange={e => onchange(e)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                            </div>


                             

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={() => finalizar()}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
