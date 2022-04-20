const MAYOR_EDAD     = 18
const persona        = 19
const tieneDocumento = true

let cond1 = (persona >= MAYOR_EDAD) && (tieneDocumento === true)

if(cond1){
    console.log("Puede viajar")
} else {
    console.log("No puede viajar")
}