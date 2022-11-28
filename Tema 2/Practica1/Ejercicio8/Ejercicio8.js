window.onload = function (){
    var boton = document.getElementById('cargar')
    boton.addEventListener('click', cargarJson)
}
    
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarJson() {
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById('contenedor')
        XMLHttpRequestObject.open("GET", "./prueba.json")
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                var documento = JSON.parse(XMLHttpRequestObject.responseText);
                contenedor.innerHTML = documento.nombre;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}