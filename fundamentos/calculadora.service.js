const Calculadora = {
    suma: function (a, b){
        return a + b
    },
    resta: function (a, b){
        return a - b
    },
    multiplicacion: function (a, b){
        return a * b
    },
    division: function (a, b){
        if(b === 0){
            return 'Error'
        }
        return a / b
    },
    sumatoria: function (arr){
        let suma = 0
        for (let i = 0; i < arr.length; i++){
            suma += arr[i] // suma = suma + arr[i]
        }
        return suma
    }
}

module.exports = Calculadora