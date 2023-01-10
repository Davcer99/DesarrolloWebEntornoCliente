$(document).ready(function(){
    $("#btn").click(function(){
        $.post( "prueba.php", {nombre:"David"},function(data){
            $("#contenedor").html(data)
        })
    }) 
});