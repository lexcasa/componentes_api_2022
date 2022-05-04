const express = require('express')
const app     = express()
const port    = 3000

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

app.listen(port, (req, res) => {
    console.log("Running ::")
})