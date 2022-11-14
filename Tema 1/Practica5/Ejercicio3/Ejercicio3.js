window.onload = function(){
    var inputs = document.getElementsByName('color')
    
    for(var i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('change',cambiarColor)
    }
}
function cambiarColor() {
    var parrafo = document.getElementById('parrafo');
    parrafo.style.color = this.value
}