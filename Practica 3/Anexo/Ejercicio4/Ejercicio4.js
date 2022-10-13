'use strict'
window.onload = function(){
    //cargar botones y añadir event listeners
    var botonEnlaces = document.getElementById('enlaces');
    var botonReferencia = document.getElementById('referencia');
    var botonReferenciaParrafo = document.getElementById('referenciaParrafo');
    var botonCambiarcolor = document.getElementById('cambiarColor');
    var botonEliminarColor = document.getElementById('eliminarColor');
    botonEnlaces.addEventListener("click",enlaces);
    botonReferencia.addEventListener("click",referencias);
    botonReferenciaParrafo.addEventListener("click",referenciasPorParrafo);
    botonCambiarcolor.addEventListener("click",cambioColor);
    botonEliminarColor.addEventListener("click", eliminarColor);
    //funciones
    function enlaces() {
        var contenido = document.getElementsByTagName('a');
        alert("Hay " + (contenido.length) + " links en la página")
    }
    function referencias() {
        var resultado = "";
        var enlaces = document.links;
        for (let i = 0; i < enlaces.length; i++) {
            resultado += enlaces[i]+ "\n";
            console.log(enlaces[i]);
        }
        alert(resultado);
    }
    function referenciasPorParrafo (){
        var parrafos = document.getElementsByTagName('p');
        var parrafo1 = sacarEnlaces(parrafos[0],1);
        var parrafo2 = sacarEnlaces(parrafos[1],2);
        var parrafo3 = sacarEnlaces(parrafos[2],3);
        alert(parrafo1 + "\n" + parrafo2 + "\n" + parrafo3)
    }
    function sacarEnlaces(parrafo, nParrafo){
        var parrafoDato = parrafo.getElementsByTagName('a');
        let resultado = "";
        for (let i = 0; i < parrafoDato.length; i++) {
            resultado += parrafoDato[i].href+ "\n";
            console.log(parrafoDato[i].href);
        }
        return "El parrafo "+ nParrafo + " tiene estos enlaces:\n" + resultado;
    }
    function cambioColor() {
        var parrafos = document.getElementsByTagName('p');
        for (let i = 0; i <3; i++) {
            parrafos[i].style.backgroundColor = "green";          
        } 
    }
    function eliminarColor() {
        var parrafos = document.getElementsByTagName('p');
        for (let i = 0; i <3; i++) {
            parrafos[i].style.backgroundColor = "white";          
        } 
    }
    
}


    
    
    

