'use strict'
//definir el array 
var numeros = [7,8,2,9,10];

//recorrer el array y hacer la suma 
var resultado = 0;
numeros.forEach(numero => {
    if(numero > 8){
        resultado+= numero;
    }; 
});
// mostrar el resultado
alert("El resultado de la suma de los numeros mayores de 8 es : "+ resultado);