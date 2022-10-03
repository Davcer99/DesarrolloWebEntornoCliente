'use strict'
windows.onload = function(){
    function links() {
        alert("funciona")
        var contenido = document.getElementsByName('a');
        alert("Hay " + (contenido.length()+1) + " links en la página")
    }
    function imagenes() {
        var contenido = document.getElementsByName('img');
        alert("Hay " + (contenido.length() +1) + " imagenes en la página")
    }
}
