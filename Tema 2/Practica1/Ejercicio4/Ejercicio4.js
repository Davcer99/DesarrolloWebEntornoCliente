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
                var xml = XMLHttpRequestObject.responseXML;
                var agendas = xml.getElementsByTagName('agenda')
                for (let i = 0; i < agendas.length; i++) {
                    var agenda = agendas[i]
                    var nombre = agenda.getElementsByTagName('nombre')[0].firstChild.nodeValue
                    var apellidos = agenda.getElementsByTagName('apellido')[0].firstChild.nodeValue
                    resultado = "<p>"+ nombre + " "+ apellidos +"</p>"                    
                }
                contenedor.innerHTML = resultado;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}