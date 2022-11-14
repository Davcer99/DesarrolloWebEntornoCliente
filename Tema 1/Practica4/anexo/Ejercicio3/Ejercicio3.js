window.onload =  function(){
    var boton = document.getElementById('boton');
    var contenedor = document.getElementById('contenedor');
    boton.addEventListener("click", cambiarMedidas);
    contenedor.addEventListener("click", mensaje);
}
function mensaje(event){
    alert('x: '.concat(event.clientX - this.offsetLeft, '\ny: ', event.clientY - this.offsetTop));
}
function cambiarMedidas(event) {
    with(this.parentNode.style){
        height = Math.round(Math.random() * screen.height) + 'px';
        width = Math.round(Math.random() * screen.width) + 'px';
    }
    event.stopPropagation(); 
}
