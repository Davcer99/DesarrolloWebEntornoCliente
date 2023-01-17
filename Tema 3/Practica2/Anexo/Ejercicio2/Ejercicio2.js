$(document).ready(function(){
    $("#btn").click(function(){
        let request = $.ajax({
            method: "GET",
            url: "pruea.php",
            dataType: "script"
        })
        
        request.done(function(txt){
            $("#contenedor").html(txt)
        });
        request.fail(function(jqXHR, textStatus, errorMessage){
            alert("Fallo al intentar cargar el archivo " + textStatus + " " + errorMessage)
        })
    }) 
});