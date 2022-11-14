window.onload =  function(){
    var formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", validacion);
}
function validacion (event){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('correo').value;
    if(nombre == null || nombre.length == 0){
        alert("Es necesario rellenar el nombre")
        return
    }
    if(email == null || email.length == 0){
        alert("Es necesario rellenar el email")
        return
    }
    this.submit();
}





