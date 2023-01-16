$(document).ready(function(){
    $("#btn").click(function(){
        let request = $.ajax({
            method: "GET",
            url: "prueba.txt",
            dataType: "text"
        })
        
        request.done(function(txt){
            $("#contenedor").html(txt)
        });
        request.fail(function(){
            alert("Fallo al intentar cargar el archivo")
        })
    }) 
});