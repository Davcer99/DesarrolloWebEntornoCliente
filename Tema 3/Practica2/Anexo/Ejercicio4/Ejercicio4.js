$(document).ready(function(){
    $( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        var data = $("form").serialize();
        alert(data);
        var gets= $.get("prueba.php", data);
        gets.done(function(result){
            $(".contenedor").html(result);
        })
      });
});