window.onload = function (){
    var boton = document.getElementById('cargar')
    boton.addEventListener('click', cargarJson)
}
    
var XMLHttpRequestObject = false;
XMLHttpRequestObject = new XMLHttpRequest();

function cargarJson() {
    if(XMLHttpRequestObject){
        var contenedor = document.getElementById('contenedor')
        var misDatos = "json="+ "./prueba.json";
        XMLHttpRequestObject.open("POST", "prueba.php")
        XMLHttpRequestObject.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 &&
                XMLHttpRequestObject.status == 200) {
                var documento = JSON.parse(XMLHttpRequestObject.responseText);
                contenedor.innerHTML = documento;
            }
        }
        XMLHttpRequestObject.send(misDatos);
    }
}