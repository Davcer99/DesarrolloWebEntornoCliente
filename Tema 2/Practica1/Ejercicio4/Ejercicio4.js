window.onload = function(){
    var boton = document.getElementById('cargar')
    boton.addEventListener('click', cargarXML)
}
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarXML() {
    if(XMLHttpRequestObject){
        XMLHttpRequestObject.open("GET", "./datos.xml")
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                var contenedor = document.getElementById('contenedor')
                var resultado= "";
                /* contenedor.innerHTML = XMLHttpRequestObject.responseXML */
                var xml = XMLHttpRequestObject.responseXML.getElementsbyTagName('agenda');
                for (let i = 0; i < xml.length; i++) {
                    var nombre = xml[i].nombre
                    var apellidos = xml[i].apellidos
                    resultado = "<p>"+ nombre + apellidos +"</p>"                    
                }
            }
        }
        XMLHttpRequestObject.send(null);
    }
}