'use strict'

var input = prompt("Introduce un mes del año para saber la estacion").toLowerCase();

switch (input) {
    case "diciembre":
    case "enero":
    case "febrero":
        alert("Estamos en invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        alert("Estamos en primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        alert("Estamos en verano");
        break;

    default:
        alert("Introduce un mes correcto");
        break;
};