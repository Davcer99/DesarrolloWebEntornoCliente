window.onload = function (){
    var boton = document.getElementById('enviar')
    boton.addEventListener('click', enviar)
}
    
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function enviar() {
    //Recoger datos del formulario:
    reemail=document.datos.miemail.value; //Email escrito por el usuario
    recontra1=document.datos.micontra1.value; //Contraseña primera
    recontra2=document.datos.micontra2.value; //Contraseña segunda
    //Escribir la url para enviar los datos anteriores:
    ruta="ejercicio7.php" //ruta del archivo
    envio1="envioEmail="+reemail; //datos email
    envio2="envioContra1="+recontra1; //datos contraseña 1�
    envio3="envioContra2="+recontra2; //datos contraseña 2�
    url=ruta+"?"+envio1+"&"+envio2+"&"+envio3; //url para enviar
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