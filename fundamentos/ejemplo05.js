const arr = [1, 2, 3, "hola", "b", 5]
let arr01 = []
let arr02 = []

for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string'){
        arr01.push( arr[i] )
    } else if (typeof arr[i] === 'number'){
        arr02.push( arr[i] )
    }
}

console.log(arr01, arr02)


let persona = {
    nombre: "Alex",
    apellido: "Casadevall",
    edad: 30
}

for (let key in persona){
    console.log(key, persona[key])
}