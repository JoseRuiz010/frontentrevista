
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
    entrevistas: `http://localhost:3000/modeloEntrevista`
}


export const ConstOptionReducer = {
    modeloSeleccionado: 'modeloSeleccionado',
    newModelo: 'newModelo',
    newPregunta: 'newPregunta',
    getPreguntas: 'getPreguntas'
}
