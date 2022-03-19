
import { ConstOptionReducer, urlApi } from "../Contantes/ConstantesRoutes";


export const getPreguntas = async () => {
    const preg = await fetch(urlApi.preguntas).then(data => data.json())
    console.log(preg);
    return preg.map(p => ({ ...p, select: false }))
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

export const getModelo = async () => {
    const modelos = await fetch(urlApi.entrevistas).then(data => data.json())
    console.log(modelos);
    return modelos;
    //  distpatch({ type: ConstOptionReducer.getPreguntas, payload: preg.map(p => ({ ...p, select: false })) })
}

export const addModelo = async (data) => {

    fetch(urlApi.entrevistas, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}


