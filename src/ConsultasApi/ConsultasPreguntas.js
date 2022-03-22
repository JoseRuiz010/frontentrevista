
import { ConstOptionReducer, urlApi } from "../Contantes/ConstantesRoutes";


export const getPreguntas = async () => {
    const preg = await fetch(urlApi.preguntas).then(data => data.json())

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

    return modelos;

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


export const getEntrevistado = async () => {
    const entrevistado = await fetch(urlApi.entrevistado).then(data => data.json())

    return entrevistado
}
export const getEntrevistador = async () => {
    const entrevistador = await fetch(urlApi.entrevistador).then(data => data.json())

    return entrevistador;
}