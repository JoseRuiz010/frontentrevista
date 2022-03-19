import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext';
import './modal.css'
export const ModalNewModelo = () => {
    const { preguntas, GetPreguntas, ChangePregunta, AddModelo } = useContext(GlobalContext);
    const [loading, setloading] = useState(true)
    const [newmodelo, setNewModelo] = useState({
        title: '',
        preguntas: []
    })

    const onchange = (e) => {
        e.preventDefault();
        setNewModelo({ ...newmodelo, name: e.target.value })
    }

    const onchangeCheck = (p) => {
        const updte = { ...p, select: !p.select }
        console.log('change', updte);
        ChangePregunta(updte)
    }
    const finalizar = () => {
        setNewModelo({ ...newmodelo, preguntas: preguntas.filter(p => p.select === true) })
        //console.log(newmodelo);
        AddModelo(newmodelo)
    }
    useEffect(() => {

        (async function () {
            setloading(true)
            await GetPreguntas()
            setloading(false)
        })()


    }, [])


    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">New Modelo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input onChange={e => onchange(e)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                            </div>


                            <label className="form-label">Seleccionar Items a evaluar</label>
                            {
                                preguntas.map((p, i) => (
                                    <div key={i}>
                                        <br />
                                        <label onClick={() => onchangeCheck(p)} className={`form-check-label  ${p.select ? 'select' : 'brt'}`}>{i + 1}-{p.descripcion}</label>
                                    </div>


                                ))
                            }

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => finalizar()}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
