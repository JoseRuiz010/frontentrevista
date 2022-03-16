import React, { useState } from 'react'

export const ModalNewModelo = ({ preguntas,distpatch }) => {
    console.log(preguntas);

    const [newmodelo, setNewModelo]= useState({
        title:'',
        preguntas:[]
    })

    const onchange=(e)=>{
        e.preventDefault();
        setNewModelo({...newmodelo, title:e.target.value})
    }

    const onchangeCheck=(e)=>{
        e.preventDefault();
        setNewModelo({...newmodelo, preguntas:[...preguntas,e.target.value]})
    }
    

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
                                <input onChange={e=>onchange(e)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                            </div>
                            

                            <label className="form-label">Seleccionar Items a evaluar</label>
                            {
                                preguntas.map((p, i) => (
                                    <div key={i} class="form-check">
                                        <input className="form-check-input" name={p.descripcion} type="checkbox" onChange={(e)=>onchangeCheck(e)} value={p.id} id="flexCheckDefault"/>
                                            <label classNam="form-check-label"  >
                                                {p.descripcion}
                                            </label>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>distpatch({type:'newModelo',payload:{title:'Hola',preguntas:[1,2,3]}})}>Understood</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
