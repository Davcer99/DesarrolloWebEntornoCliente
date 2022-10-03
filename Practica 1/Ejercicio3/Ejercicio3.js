'use strict'

var input = prompt("Introduce un mes del año para saber la estacion").toLowerCase();

if (input == "enero"|| input =="febrero"|| input == "diciembre" ) {
    alert("Estamos en invierno");
}else if (input == "marzo"|| input == "abril"|| input == "mayo") {
    alert("Estamos en primavera");
}else if (input == "junio"|| input == "julio"|| input == "agosto") {
    alert("Estamos en verano");
}else{
    alert("Introduce un mes correcto");
}