$(document).ready(function()
{
    $("input[name=color]").each(function(){
        $(this).change(function(){
            $("p").css("color",$(this).val())
        })
    })
});