'use strict'
window.onload = function () {
    var contenedor = document.createElement('div');
    contenedor.setAttribute("id","contenido")
    contenedor.setAttribute("class","contenedor")
    var parrafo = document.createElement('h1');
    var texto = document.createTextNode("Esto es un div con atributos");
    parrafo.appendChild(texto);
    contenedor.appendChild(parrafo);
    document.body.appendChild(contenedor);
}