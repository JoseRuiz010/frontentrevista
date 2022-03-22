import React from 'react'

import { ValorRespuesta } from './ValorRespuesta'

export const EvaluacionItems = ({ data }) => {

    return (
        <div key={data} className='cuerpo-items'>
            <div className='descripcion'>
                <h5>{data.descripcion}</h5>
            </div>
            <ValorRespuesta data={data} />
            {/* <span><b>{data.valor === '' ? 'Sin Elegir' : '= ' + data.valor}</b></span> */}
        </div>
    )
}
