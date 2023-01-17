$(document).ready(function(){
    $("#btn").click(function(){
        let request = $.ajax({
            method: "GET",
            url: "prueba.js",
            dataType: "script"
        })
        request.fail(function(textStatus){
            alert("Fallo al intentar cargar el archivo" + textStatus)
        })
    }) 
});