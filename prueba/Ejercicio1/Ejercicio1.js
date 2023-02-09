window.onload = function () {
    
    
}
$(document).ready(function(){
    var boton = document.getElementById('mostrar_fichero');
    boton.addEventListener('click', sacardatos)
})
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function sacardatos(){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById('contenedor');
        XMLHttpRequestObject.open("GET", "datos.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
            XMLHttpRequestObject.status == 200) {
            objeto.innerHTML = XMLHttpRequestObject.responseText;
            $("p").animate("color","red")
            }
        }
        XMLHttpRequestObject.send(null);
    }
    
}
