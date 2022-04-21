const {suma}    = require('./calculadora.service')
const Persona   = require('./persona.service')

console.log( suma(1, 2) )
console.log( Persona.obtenerApellido('alex'))    // O(1)
console.log( Persona.obtenerPersonaPorInicial('j'))
console.log( Persona.obtenerEdadPorInicial('j')) // O(n)

// "str".includes("s") -> true
// "alex".includes("a") -> true
// "alex".includes("alex") -> true