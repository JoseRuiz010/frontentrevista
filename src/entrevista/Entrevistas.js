import React, { useContext } from 'react'
import { Index } from '../ComponenteEvaluacion/ContextEvaluacion/Index';
import GlobalContext from '../context/GlobalContext';
import './entrevista.css'
export const Entrevistas = () => {

  const { preguntas } = useContext(GlobalContext);
  return (
    <div className='entrevistasContent'>
      <div className="encabezado">
        <h3 className='titulo'>Entrevista: Desarrollo</h3>
        <div>
          <span>Entrevistado</span>
          <select>
            <option value="">Choose</option>
          </select>
        </div>
        <span>Fecha: </span><br />
        <span>Objetivo:</span>
      </div>
      <Index data={preguntas} puntuacion={10} />
      <span>Comentario</span>

    </div>
  )
}
