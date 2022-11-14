window.onload =  function(){
    var formulario = document.getElementById('formulario');
    formulario.addEventListener("submit", validacion);
}
function validacion (event){
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == null || inputs[i].value.length == 0){
            alert("Es necesario rellenar todos los campos del formulario");
            return
        }  
    }
    this.submit();
    alert("Los datos se han enviado correctamente")
}