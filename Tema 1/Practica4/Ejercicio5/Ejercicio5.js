window.onload =  function(){
    var input = document.getElementById('documento');
    input.addEventListener("keypress", formatear_texto)
}
function formatear_texto(event) {
    
    if (event.charCode >= '48' && event.charCode <= '57'){
       
    }else{
        event.preventDefault();
    }
}






 