window.onload =  function(){
    var botones = document.getElementsByTagName('button');
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click',mensaje) 
    }
}
function mensaje (){
    alert("has pulsado sobre un boton");
}