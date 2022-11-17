window.onload = function(){
    var imagen1 = document.getElementById('imagen1')
    imagen1.addEventListener('click', cambiarImagen)

    var imagen2 = document.getElementById('imagen2')
    imagen2.addEventListener('click', cambiarImagen)
}
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cambiarImagen() {
    if(XMLHttpRequestObject){
        XMLHttpRequestObject.open("GET", this.value)
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                var imagen = document.getElementById('imagen')
                imagen.src= XMLHttpRequestObject.responseText
            }
        }
        XMLHttpRequestObject.send(null);
    }
}