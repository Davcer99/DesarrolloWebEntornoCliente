window.onload = function(){
    var contenedor = document.getElementById('contenedor');
    contenedor.addEventListener('mouseover',cambiarTamaño);
    contenedor.addEventListener('mouseleave',cambiarTamañoPequeño)
}
function cambiarTamaño (){
    this.style = "font-size: 16pt;"
}
function cambiarTamañoPequeño (){ 
    this.style = "font-size: 12pt;"
}