$(document).ready(function(){
    document.querySelectorAll('[name=viaje]').forEach((x) => x.checked = false);
    document.querySelectorAll('[name=Extras]').forEach((x) => x.checked = false);
    $("input[name=viaje]").on("focus",function(){
        $("#contenedor").text("");
        $("#contenedor").append("<input type='text' name='precio' id='precio'>");
        
        let valor = $(this).val()
        $("#precio").val(valor)
    })
    $("#extras").on("change",function(){
        
        if($(this).is(':checked')){
            let request = $.ajax({
                method: "GET",
                url: "datos.txt",
                dataType: "text"
            })
            
            request.done(function(txt){
                $("#contenedorInfo").html(txt)
            });
            request.fail(function(){
                alert("Fallo al intentar cargar el archivo")
            })

            $("#contenedorInfo").css({border: '0 solid black'}).animate({
                borderWidth: "10px",
                fontSize:"25pt"
            },2000)
            
        }else{
            $("#contenedorInfo").css({border: '0 solid black'}).text("");
        }
    })
})

