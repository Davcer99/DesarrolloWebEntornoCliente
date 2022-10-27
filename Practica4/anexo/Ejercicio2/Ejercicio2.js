window.onload =  function(){
    var formulario = document.getElementById('enlace');
    formulario.addEventListener("click", anularComportamiento);
}
function anularComportamiento(event) {
    event.preventDefault();
}
