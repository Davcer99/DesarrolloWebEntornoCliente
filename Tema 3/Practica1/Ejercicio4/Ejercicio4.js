$(document).ready(function()
{
    $("#resultado").click(function(){
        if($("#resultado").prop('checked')){
            var numero1 = parseInt($("#numero1").val());
            var numero2 = parseInt($("#numero2").val());
            
            var result = numero1 + numero2;
            var input= '<input type="text" name="resultado" id="result"></input>';
            $(".contenedor").append(input)
            $("#result").val(result);
        }else{
            $("#result").remove()
        }
    })
});