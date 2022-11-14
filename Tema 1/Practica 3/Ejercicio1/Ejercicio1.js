'use strict'
window.onload = function(){
    var agregar = document.getElementById('agregar');
    var insertar = document.getElementById('insertar');
    var reemplazar = document.getElementById('reemplazar');
    var borrar = document.getElementById('borrar');
    var clonar = document.getElementById('clonar');
    agregar.addEventListener("click",agregarParrafo);
    insertar.addEventListener("click",insertarParrafo);
    reemplazar.addEventListener("click",reemplazarParrafo);
    borrar.addEventListener("click",borrarParrafo);
    clonar.addEventListener("click",clonarParrafo);

    function agregarParrafo() {
        var contenedorParrafos = document.getElementById('contenedor');
        let parrafo = document.createElement("p");
        let texto = document.createTextNode("Parrafo añadido");
        parrafo.appendChild(texto);
        contenedorParrafos.appendChild(parrafo); 
    }
    function insertarParrafo(){
        var contenedorParrafos = document.getElementById('contenedor');
        let parrafo = document.createElement("p");
        let texto = document.createTextNode("Parrafo insertado");
        parrafo.appendChild(texto);
        var posicion = document.getElementById('contenedor').getElementsByTagName('p')[1];
        contenedorParrafos.insertBefore(parrafo,posicion); 
    }
    function reemplazarParrafo(){
        var contenedorParrafos = document.getElementById('contenedor');
        let parrafo = document.createElement("p");
        let texto = document.createTextNode("Parrafo reemplazado");
        parrafo.appendChild(texto);
        var posicion = document.getElementById('contenedor').getElementsByTagName('p')[1];
        contenedorParrafos.replaceChild(parrafo,posicion); 
    }
    function borrarParrafo(){
        var posicion = document.getElementById('contenedor').getElementsByTagName('p')[1];
        posicion.remove();
    }
    function clonarParrafo() {
        var posicion = document.getElementById('contenedor');
        var nodoClonado = posicion.cloneNode(true);
        posicion.appendChild(nodoClonado);
    }
}