window.onload = function () {
    var boton = document.getElementById('mostrar_fichero');
    boton.addEventListener('click', sacardatos)
    
}
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function sacardatos(){
    alert(XMLHttpRequestObject)
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById('contenedor');
        XMLHttpRequestObject.open("GET", "datos.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
            XMLHttpRequestObject.status == 200) {
            objeto.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}
