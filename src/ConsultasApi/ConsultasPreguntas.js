
import { ConstOptionReducer, urlApi } from "../Contantes/ConstantesRoutes";


export const getPreguntas = async (distpatch) => {
    const preg = await fetch(urlApi.preguntas).then(data => data.json())
    console.log(preg);

    distpatch({ type: ConstOptionReducer.getPreguntas, payload: preg.map(p => ({ ...p, select: false })) })
}

export const addPregunta = async (data) => {

    fetch(urlApi.preguntas, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}


