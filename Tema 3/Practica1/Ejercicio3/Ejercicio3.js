$(document).ready(function()
{
    $("input[name=color]").each(function(){
        $(this).change(function(){
            $("p").css("background-color",$(this).val())
        })
    })
});