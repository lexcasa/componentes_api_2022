const express = require('express')
const bodyParser = require('body-parser')
const app     = express()
const port    = 3001
const Persona = require('./services/persona.service')
const Componentes = require('./services/componentes.service')
const cors    = require('cors')

app.use(cors())
app.use(bodyParser.json())
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

/* Componentes API */
// Obtengo todos los componentes de la collection
app.get('/componentes', async (req, res) => {
    const componentes   = await Componentes.todos()
    res.send(componentes)
})

// Agregar un componente nuevo
app.post('/componentes', async (req, res) => {
    const componente    = req.body
    const componentes   = await Componentes.nuevo(componente)
    res.send(componentes)
})

// Eliminar un componente
app.delete('/componentes/:id', async (req, res) => {
    const componentes   = await Componentes.eliminar(req.params.id)
    res.send(componentes)
})

// Actualizar un componente
app.put('/componentes', async (req, res) => {
    const componente    = req.body
    const componentes   = await Componentes.actualizar(componente)
    res.send(componentes)
})

app.listen(port, (req, res) => {
    console.log("Running ::")
})