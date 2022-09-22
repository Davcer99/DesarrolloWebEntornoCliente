'use strict'
var cadena = prompt("Introduce una cadena");
document.write("La longitud de la cadena es: " + cadena.length + "<br>");
document.write("La cadena en mayusculas es: "+ cadena.toUpperCase()+ "<br>");
document.write("La cadena en minusculas es: " + cadena.toLocaleLowerCase()+ "<br>")
var palabras = cadena.split(" ");
document.write("CADENA NORMAL")

for (let i = 0; i < palabras.length; i++) {
    document.write("<br>"+ palabras[i]);
}
document.write("<br>" +"CADENA INVERTIDA")
var palabrasInvertidas = palabras.reverse();
for (let i = 0; i < palabrasInvertidas.length; i++) {
    document.write("<br>"+ palabrasInvertidas[i]);   
};