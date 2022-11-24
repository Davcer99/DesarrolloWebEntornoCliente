window.onload = function (){
    var boton = document.getElementById('cargar')
    boton.addEventListener('click', cargarScript)
}
    
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarScript() {
    if(XMLHttpRequestObject){
        XMLHttpRequestObject.open("GET", "./alert.js")
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                eval(XMLHttpRequestObject.responseText)
            }
        }
        XMLHttpRequestObject.send(null);
    }
}