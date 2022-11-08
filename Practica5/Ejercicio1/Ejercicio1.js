window.onload = function(){
    document.getElementById('nombre').focus();
    var aficion = document.getElementById('aficion');
    aficion.addEventListener('change', mensaje)
    var observaciones = document.getElementById('observaciones')
    observaciones.addEventListener('keypress', limita)
    var formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', validar)
    
}
function mensaje() {
     
    alert("La longitud de la lista es "+ this.options.length + "\nEl indice seleccionado es " + this.selectedIndex + "\nEl valor del indice seleccionado es "+ this.value)
}

function limita(event) {
    if(this.value.length >= 150){
        alert('Has excedido el limite de caracteres permitidos');
        event.preventDefault();
        
    }
}

function validar(event) {
    var telefono = documetn.getElementById('telefono')
    if(!(/^\d{9}$/.test(telefono)) ) {
        alert('El telefono no tiene 9 digitos');
        event.preventDefault();
    }else if (document.getElementById('dni').value == "") {
        alert("El campo dni esta vacio");
        event.preventDefault();
    }
}
