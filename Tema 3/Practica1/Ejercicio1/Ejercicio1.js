$(document).ready(function(){
    $("#boton").click(function(){
        $("p").css("color","green")
        var capas = $("div");
        alert(`Hay ${capas.length} capas en el documento`)
    })
});