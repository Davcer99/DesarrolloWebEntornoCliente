window.onload = function (){
    var boton = document.getElementById('cargar')
    boton.addEventListener('click', cargarPhp)
}
    
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarPhp() {
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById('contenedor')
        var nombre=document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellidos').value;
        var edad = document.getElementById('edad').value; 
        //Escribir la url para enviar los datos anteriores:
        var ruta="prueba.php" //ruta del archivo
        var envio1="nombre="+nombre;
        var envio2="apellidos="+apellidos;
        var envio3="edad="+edad;
        var misDatos=envio1+"&"+envio2+"&"+envio3; //url para enviar
        XMLHttpRequestObject.open("POST", ruta, true)
        XMLHttpRequestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XMLHttpRequestObject.setRequestHeader("Content-length", misDatos.length);
        XMLHttpRequestObject.setRequestHeader("Connection", "close");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                contenedor.innerHTML = XMLHttpRequestObject.responseText
            }
        }
        XMLHttpRequestObject.send(misDatos);
    }
}