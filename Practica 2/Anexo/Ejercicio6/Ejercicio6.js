'use strict'
function procesarCadena() {
    var cadena = document.getElementById('cadena').value;
    var resultado = eval(cadena);
    alert("El resultado de la operacion es: "+ resultado);
};