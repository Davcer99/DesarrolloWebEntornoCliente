$(document).ready(function(){
    var result= "";
   $("#boton").on("click", function(){
        var request = $.getJSON("prueba.json", function(json){
        json.forEach(function(item){
            result+= item.name.common + "<br>"
        })
        $(".contenedor").html(result)
        request.fail(function(error, textStatus){
            alert("Fallo al intentar cargar el json " + error.status + " " + textStatus.status)
        })
    })
    });

});