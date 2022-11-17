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
        var objeto1 = document.getElementById('contenido');
        XMLHttpRequestObject.open("GET", "inicio.html");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
            XMLHttpRequestObject.status == 200) {
            objeto1.innerHTML = XMLHttpRequestObject.responseText;
            cargarProductosOnload();
            }
        }
        XMLHttpRequestObject.send(null);
    }
}

function cargarProductos() {
    
    if(XMLHttpRequestObject) {
        var objeto2 = document.getElementById('contenido');
        XMLHttpRequestObject.open("GET", "contacto.html");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
            XMLHttpRequestObject.status == 200) {
            objeto2.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}

function cargarContacto() {
    
    if(XMLHttpRequestObject) {
        var objeto3 = document.getElementById('contenido');
        XMLHttpRequestObject.open("GET", "contacto.html");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
            XMLHttpRequestObject.status == 200) {
            objeto3.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
}
