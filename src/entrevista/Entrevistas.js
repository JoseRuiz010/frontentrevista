import React, { useContext, useEffect } from 'react'
import { Index } from '../ComponenteEvaluacion/ContextEvaluacion/Index';
import GlobalContext from '../context/GlobalContext';
import './entrevista.css'
export const Entrevistas = () => {

  const { preguntas, GetEntrevistador, GetEntrevistado, entrevistado } = useContext(GlobalContext);
  useEffect(() => {

    (async function () {
      await GetEntrevistado()
      await GetEntrevistador()
    })()

  }, [])

  return (
    <div className='entrevistasContent'>
      <div className="encabezado">
        <h3 className='titulo'>Entrevista: Desarrollo</h3>
        <div>
          <span>Entrevistado</span>
          <select>
            <option value="">Choose...</option>
            {
              entrevistado.map(e => (
                <option value={e.id}>{`${e.persona.apellido}, ${e.persona.name} `}</option>
              ))
            }
          </select>
        </div>
        <span>Fecha: </span> <input type={'date'} /><br />
        <span>Objetivo:</span> <textarea />
      </div>
      <Index data={preguntas} puntuacion={10} />
      <span>Comentario</span>

    </div>
  )
}
