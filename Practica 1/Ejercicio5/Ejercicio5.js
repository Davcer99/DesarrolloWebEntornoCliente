'use strict'
var precio = parseFloat(prompt("Introduce el precio del articulo"));
var iva = precio * 0.21
var precioTotal = precio + iva;
alert("El iva del producto es: " + iva);
alert("El precio total de producto es: " + precioTotal.toFixed(2));