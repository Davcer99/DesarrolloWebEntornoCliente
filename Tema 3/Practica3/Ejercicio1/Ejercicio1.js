$(document).ready(function(){
    $("button").on("click", function(){
        let animacion = this.value;
        switch (animacion) {
            case "hide":
                $("#img").hide("slow")
                break;
            case "fadeIn":
                $("#img").fadeIn("slow")
                break;
            case "slideDown":
                $("#img").slideToggle("slow")
                break;
            case "animate":
                $("img").animate({
                    opacity: 0.25,
                    left: "+=50",
                    height: "toggle"
                }, 5000);
                break;
            default:
                break;
        }
    })
    
});

