'use strict'
//declarar la variable de 
var resultado = 0;
var contador = 0;
//pedir y sumar los numeros
for (let i = 0; i < 5; i++) {
    var numero = parseInt(prompt("Introduce un numero"));
    resultado += numero;
    if (numero > 100){
        contador++;
    };
};
//mostrar el resultado
alert(resultado);
alert("Se han introducido "+ contador+ " numeros mayores que 100")