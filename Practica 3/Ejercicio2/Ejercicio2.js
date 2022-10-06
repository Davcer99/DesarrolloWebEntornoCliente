'use strict'
window.onload = function(){
    //botones
    var agregar = document.getElementById('agregar');
    var insertar = document.getElementById('insertar');
    var reemplazar = document.getElementById('reemplazar');
    var borrar = document.getElementById('borrar');
    var clonar = document.getElementById('clonar');
    var Sublista = document.getElementById('crearSublista');
    var innerHTML = document.getElementById('innerHTML');
    //añadir event listener
    agregar.addEventListener("click",agregarAnimal);
    insertar.addEventListener("click",insertarAnimal);
    reemplazar.addEventListener("click",reemplazarAnimal);
    borrar.addEventListener("click",borrarAnimal);
    clonar.addEventListener("click",clonarLista);
    Sublista.addEventListener("click",crearSublista);
    innerHTML.addEventListener("click", crearInnerHTML);
    //declarar las funciones
    function agregarAnimal() {
        var contenedorParrafos = document.getElementById('listaelemen');
        let parrafo = document.createElement("li");
        let texto = document.createTextNode(prompt("Introduce el animal que quieres añadir"));
        parrafo.appendChild(texto);
        contenedorParrafos.appendChild(parrafo); 
    }
    function insertarAnimal(){
        var contenedorParrafos = document.getElementById('listaelemen');
        let parrafo = document.createElement("li");
        let texto = document.createTextNode(prompt("Introduce el animal que quieres añadir"));
        parrafo.appendChild(texto);
        var posicion = document.getElementById('listaelemen').getElementsByTagName('li')[3];
        contenedorParrafos.insertBefore(parrafo,posicion); 
    }
    function reemplazarAnimal(){
        var contenedorParrafos = document.getElementById('listaelemen');
        let parrafo = document.createElement("li");
        let texto = document.createTextNode(prompt("Por que animal quieres reemplazarlo"));
        parrafo.appendChild(texto);
        var posicion = document.getElementById('listaelemen').getElementsByTagName('li')[3];
        contenedorParrafos.replaceChild(parrafo,posicion); 
    }
    function borrarAnimal(){
        var posicion = document.getElementById('listaelemen').getElementsByTagName('li')[3];
        posicion.remove();
    }
    function clonarLista() {
        var posicion = document.getElementById('listaelemen');
        var nodoClonado = posicion.cloneNode(true);
        posicion.appendChild(nodoClonado);
    }
    function crearSublista() {
        
        var contenedorParrafos = document.getElementById('listaelemen');
        let lista = document.createElement("ul");
        let contenido = document.createElement("li");
        let texto = document.createTextNode(prompt("Introduce el animal que quieres añadir en la sublista"));
        contenido.appendChild(texto);
        lista.appendChild(contenido);
        var posicion = document.getElementById('listaelemen').getElementsByTagName('li')[1];
        contenedorParrafos.insertBefore(lista,posicion); 
    }
    function crearSublista() {
        
        var contenedorParrafos = document.getElementById('listaelemen');
        let lista = document.createElement("ul");
        let contenido = document.createElement("li");
        let texto = document.createTextNode(prompt("Introduce el animal que quieres añadir en la sublista"));
        contenido.appendChild(texto);
        lista.appendChild(contenido);
        var posicion = document.getElementById('listaelemen').getElementsByTagName('li')[1];
        contenedorParrafos.insertBefore(lista,posicion); 
    }
    function crearInnerHTML() {
        var contenedorParrafos = document.getElementById('listaelemen');
        let lista = document.createElement("ul");
        lista.innerHTML += "<li>Pato</li>";
        document.getElementsByTagName('li')[0].appendChild(lista);
    }
}