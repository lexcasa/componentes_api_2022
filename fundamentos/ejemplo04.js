const MAYOR_EDAD = 18
const padre      = 30
const madre      = 28
const padreAuth  = true
const madreAuth  = false
const tieneDocumento = true

let cond1 = padre > MAYOR_EDAD || madre > MAYOR_EDAD
let cond2 = padreAuth || madreAuth
let cond3 = tieneDocumento === true

if(cond1 && cond2 && cond3){
    console.log("Puede viajar")
} else {
    console.log("No puede viajar")
}