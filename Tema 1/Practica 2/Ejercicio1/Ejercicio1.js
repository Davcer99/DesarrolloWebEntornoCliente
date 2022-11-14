'use strict'
var precio = parseFloat(prompt("Introduce el precio del articulo"));
var iva = precio * 0.21
var precioTotal = calcularIva(precio,21);
console.log(precioTotal);
alert("El iva del producto es: " + iva.toFixed(2));
alert("El precio total de producto es: " + precioTotal.toFixed(2));

function calcularIva(precio,iva) {
    var ivaMult = precio * (iva/100);
    var resultado = precio + ivaMult;
    return resultado;
}