window.onload = function(){
    let nombre = document.getElementById('nombre');
    nombre.focus();
    var aficion = document.getElementById('aficion');
    aficion.addEventListener('change', mensaje)
    var formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validar)
    
}
function mensaje() {
    var seleccionado = this.selectedIndex;
    var seleccion = this.options[seleccionado].value; 
    alert("La longitud de la lista es "+ this.options.length + "\nEl indice seleccionado es " + this.selectedIndex + "\nEl valor del indice seleccionado es "+ seleccion)
}

function validar(event) {
    var observaciones = document.getElementById('observaciones');
    var dni = document.getElementById('dni');
    var telefono = document.getElementById('telefono')

    if(observaciones.value.length > 150){
        event.preventDefault()
    }

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
        event.preventDefault()
    }

    if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]) {
        event.preventDefault()
    }

    if( !(/^\d{9}$/.test(telefono)) ) {
        event.preventDefault()
    }
}
