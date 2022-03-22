
export const nameRoute = {
    "/": "/",
    '/entrevistas': '/entrevistas',
    '/modeloEntrevistas': '/modeloEntrevistas',
    '/modeloEntrevistas/:id': '/modeloEntrevistas/:id',
    '/pregunta': '/pregunta',
    "/login": "/login",
}


export const urlApi = {
    preguntas: `http://localhost:3000/pregunta`,
    entrevistas: `http://localhost:3000/modeloEntrevista`,
    entrevistado:`http://localhost:3000/entrevistado`,
    entrevistador:`http://localhost:3000/entrevistador`
}


export const ConstOptionReducer = {
    modeloSeleccionado: 'modeloSeleccionado',
    newModelo: 'newModelo',
    newPregunta: 'newPregunta',
    getPreguntas: 'getPreguntas'
}
