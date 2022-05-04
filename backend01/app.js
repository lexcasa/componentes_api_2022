const express = require('express')
const app     = express()
const port    = 3000
const Persona = require('./services/persona.service')

app.get('/', (req, res) => {
    res.send({
        mensaje: "Hola Mundo!"
    })
})

/*
    app           -> Express
    .get          -> Metodo
    '/'           -> URL

    res.send(obj) -> Respuesta JSON que vamos a enviar al frontEnd
    Documentacion: https://expressjs.com/en/starter/hello-world.html
*/
app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre

    res.send({
        saludo: "Hola, " + nombre
    })
})

// Estado: Obtener todas las personas
app.get('/personas', (req, res) => {
    const personas   = Persona.todos()
    res.send(personas)
})

// Estado: Obtener persona por el nombre
app.get('/persona/:nombre', (req, res) => {
    const nombre    = req.params.nombre
    const persona   = Persona.obtenerPersona(nombre)

    res.send(persona)
})

app.listen(port, (req, res) => {
    console.log("Running ::")
})