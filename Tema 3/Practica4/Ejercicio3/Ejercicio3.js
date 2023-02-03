jQuery.fn.cambiarColor = function(options) {
  let config ={
    size:"25px",
    color:"blue"
  }
  $.extend(config,options);
  this.css("color", config.color);
  this.css("font-size", config.size);
  this.css("background-color","aqua")
  
}; 

$(document).ready(function(){
  $("#btn").on("click", function(){
    $("p").cambiarColor({
      //poner color cambiamos al color que deseemos 
      color:"purple",
      //en el caso de poner un parametro que no este definido directamente se ignorara
      fontFamily:"sans-serif"
      //al no poner ningún parametro para font size se quedara en 25 como predeterminado en el plugin
      
    });
  })
});