window.onload = function (){
 cargarPhp()
}
    
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarPhp() {
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById('contenedor')
        XMLHttpRequestObject.open("GET", "./prueba.php")
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                contenedor.innerHTML = XMLHttpRequestObject.responseText
            }
        }
        XMLHttpRequestObject.send(null);
    }
}