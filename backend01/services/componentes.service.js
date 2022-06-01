const Mdb        = require('./mdb.service')
const collection = 'componentes'

const Componentes = {
    todos: async function (){
        const arrComponentes = Mdb.find({}, collection) // Llamo todos los items de la coleccion componentes
        return arrComponentes
    },
    nuevo: async function (obj){
        /*
            obj: {
                "nombre": String,
                "marca": String,
                "cod": String
            }
        */
        const response = Mdb.insertOne(obj, collection)
        return response
    },
    eliminar: async function (id){
        const response = Mdb.deleteOne(id, collection)
        return response
    },
    actualizar: async function (obj){
        /*
            obj: {
                "_id": String,
                "nombre": String,
                "marca": String,
                "cod": String
            }
        */
        const response = Mdb.updateOne(obj, collection)
        return response
    },
}

module.exports = Componentes
