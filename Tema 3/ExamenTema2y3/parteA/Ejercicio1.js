$(document).ready(function(){
    sacardatos();
    $("img").on("mouseover",function(){
        $(this).fadeOut(2000);
    })
    $("img").on("mouseout",function(){
        $(this).fadeIn(2000);
    })
    $("#cambioColor").on("click",function(){
        $("#contenedor").cambiarColor();
    })
})

jQuery.fn.cambiarColor = function() {
    
    $("#contenedor").animate({
        backgroundColor:"aqua"
    })
};

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
            }
        }
        XMLHttpRequestObject.send(null);
    }
}
