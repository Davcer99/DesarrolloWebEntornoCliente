'use strict'
window.onload = function(){
    var botonEnlaces = document.getElementById('enlaces');
    var botonimagenes = document.getElementById('imagenes')
    botonEnlaces.addEventListener("click",enlaces);
    botonimagenes.addEventListener("click",imagenes);
    function enlaces() {
        var contenido = document.getElementsByTagName('a');
        alert("Hay " + (contenido.length) + " links en la página")
    }
    function imagenes() {
        var contenido = document.getElementsByTagName('img');
        alert("Hay " + (contenido.length ) + " imagenes en la página")
    }
}


    
    
    

