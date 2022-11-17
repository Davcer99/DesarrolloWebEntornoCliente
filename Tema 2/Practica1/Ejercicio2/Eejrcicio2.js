window.onload = function(){
    var enlace = document.getElementById('contenido');
    enlace.addEventListener('click', cargarContenido);

    var enlace2 = document.getElementById('bienvenida');
    enlace2.addEventListener('click', cargarContenido);
}

var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarContenido(){
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById('contenedorDeCarga');
        XMLHttpRequestObject.open("GET", this.value)
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                contenedor.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}