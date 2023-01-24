$(document).ready(function(){
    $("#saludo").on("click", function(){
        $("h1").fadeTo("slow",0.5);
    });
    $("#despedida").on("click", function(){
        $("h1").fadeTo("slow",1);
    });
});

