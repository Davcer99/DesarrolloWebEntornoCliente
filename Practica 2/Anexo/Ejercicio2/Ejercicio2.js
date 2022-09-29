'use strict'
function mostrarDni() {
    var dni = document.getElementById('dni').value;    
    if(dni == ""){
        alert("Introduce un dni");
    }else{
        alert("El dni introducido es: " + dni)
        window.location.href= window.location.href +"?dni="+ dni;
    }
};

