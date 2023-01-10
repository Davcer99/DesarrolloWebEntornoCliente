$(document).ready(function(){
    $("#btn").click(function(){
        $.get( "prueba.xml", function(xml){
            $(xml).find("Book").each(function () {
                var autor = $(this).find("Author").text()
                var title = $(this).find("Title").text()
                var resultado= "El libro con el siguiente titulo :"+ title + " ha sido escrito por: " +autor
                alert(resultado)
            })
        })
    }) 
});