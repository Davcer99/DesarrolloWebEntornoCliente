function cargarRedirecciones() {
    var inicio = document.getElementById('inicio')
    var productos = document.getElementById('productos')
    var contacto = document.getElementById('contacto')
    inicio.addEventListener('click',cargarInicio);
    productos.addEventListener('click', cargarProductos);
    contacto.addEventListener('click', cargarContacto);
}

var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarInicio() {
    
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById('contenido');
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
