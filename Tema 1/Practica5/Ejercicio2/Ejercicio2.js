window.onload = function(){
    var seleccion = document.getElementById('color');
    seleccion.addEventListener('change', cambioColor)
}
function cambioColor() {
    var parrafo = document.getElementsByTagName('p')
    var seleccionado = this.selectedIndex;
    var color = this.options[seleccionado].value;
    parrafo[0].style.color = color;
}