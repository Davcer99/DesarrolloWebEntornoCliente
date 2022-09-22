'use strict'
var precio = parseFloat(prompt("Introduce el precio del articulo"));
var iva = precio * 0.21
var precioTotal = calcularIva(precio,21);
alert("El iva del producto es: " + iva.toFixed(2));
alert("El precio total de producto es: " + precioTotal.toFixed(2));

function calcularIva(precio,iva) {
    var ivaMult = iva/100;
    var resultado = precio * iva;
    return resultado;
}