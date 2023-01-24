$(document).ready(function(){
    let elem = document.querySelector("img")
    let coords = elem.getBoundingClientRect()
    console.log((coords.x))
    console.log((coords.y))
    $("#anima").on("click",function(){
        
        $("#img").animate({
            left: "100px"
        },2000,function(){
            $("#img").animate({
                top: "100px"
            },2000,function(){
                $("#img").animate({
                    left:"0px"
                },2000,function(){
                    $("#img").animate({
                        top: "0px"
                    },2000)
                })
            })
        })
    })

    

    $("#parar").on("click", function(){
        $("#img").stop(true,false)
    })
    
});

