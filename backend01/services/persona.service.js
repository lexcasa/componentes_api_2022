const personas = [
    {
        nombre: "Alex",
        apellido: "Casadevall",
        edad: 30
    },
    {
        nombre: "Juan",
        apellido: "Casadevall",
        edad: 18
    }
]
const Persona = {
    todos: function (){
        return personas
    },
    obtenerPersona: function (nombre){
        let find = undefined
        personas.map( persona => {
            // Busqueda normal
            if(persona.nombre.toLocaleLowerCase() == nombre.toLocaleLowerCase()){
                find = persona
            }
        })
        // if (find) { return find } else { return {error: "..."} }
        return find ? find : {error: "No encontro la persona"}
    }
}

module.exports = Persona