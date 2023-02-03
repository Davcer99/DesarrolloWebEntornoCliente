jQuery.fn.pintarVerde = function() {
    this.each(function(){
    elem = $(this);
    elem.css("color", "#96ff33");
    elem.css("font-size","30px")
    });
  return this;
}; 

$(document).ready(function(){
  $("#btn").on("click", function(){
    $("p").pintarVerde();
  })
});