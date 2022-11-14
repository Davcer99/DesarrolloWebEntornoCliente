'use strict'
window.onload = function(){
    var contenedor = document.getElementById('contenedor');
    contenedor.onmouseover = cambiarTamaño;
    contenedor.onmouseout = cambiarTamañoPequeño;
}
function cambiarTamaño (){
    let texto = document.getElementById('contenedor');
    texto.style = "font-size: 16pt"
}
function cambiarTamañoPequeño (){
    let texto = document.getElementById('contenedor');
    texto.style = "font-size: 12pt"
}