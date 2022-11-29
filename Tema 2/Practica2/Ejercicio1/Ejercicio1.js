window.onload = function (){
    var boton = document.getElementById('enviar')
    boton.addEventListener('click', enviar)
}
    
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function enviar() {
    //Recoger datos del formulario:
    var nombre=document.datos.nombreAlumno.value; //Email escrito por el usuario
    //Escribir la url para enviar los datos anteriores:
    ruta="Ejercicio1.php" //ruta del archivo
    envio1="nombreAlumno="+nombre; //datos email
    url=ruta+"?"+envio1; //url para enviar
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById('contenedor')
        XMLHttpRequestObject.open("GET", url)
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                contenedor.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}