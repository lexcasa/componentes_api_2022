const personas = [
    {
        nombre: "alex",
        apellido: "casadevall",
        edad: 30
    },
    {
        nombre: "juan",
        apellido: "correa",
        edad: 26
    },
    {
        nombre: "pedro",
        apellido: "hernandez",
        edad: 33
    }
]
const Persona = {
    obtenerPersonaPorInicial: function (inicial){
        let find = {}
        for (let i = 0; i < personas.length; i++){
            if(personas[i].nombre.includes(inicial)){
                find = personas[i]
                break
            }
        }
        return find
    },
    obtenerApellido: function (nombre){
        const persona = this.obtenerPersonaPorInicial(nombre)
        return persona.apellido
    },
    /*obtenerApellido: function (nombre){
        const datos = {
            'alex':'casadevall',
            'juan':'correa',
            'pedro':'hernandez'
        }
        return datos[nombre] // datos.alex
    },*/
    obtenerEdadPorInicial: function (inicial){
        const persona = this.obtenerPersonaPorInicial(inicial)
        return persona.edad
    }
}
module.exports = Persona