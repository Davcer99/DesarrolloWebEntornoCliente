window.onload = function(){
    //crear input y añadirlo
    var formulario = document.getElementById('formulario');
    var input = document.createElement('input')
    input.setAttribute("type","text")
    input.setAttribute("id","clave")
    input.setAttribute("name", "clave")
    formulario.appendChild(input)
    //llamar al evento validar clave 
    formulario.addEventListener('submit', validarClave);
}
function validarClave(event) {
    var clave = document.getElementById('clave').value;
    var clave1 = document.getElementById('clave');
    if(!(/[A-Z]+\d{3}$/.test(clave))){
        alert("clave incorrecta")
        clave1.focus();
        clave1.value="";
        event.preventDefault(); 
        
    }else{
        alert("La clave es correcta");
    }
}