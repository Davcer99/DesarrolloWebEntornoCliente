$(document).ready(function(){
  var boolean;
  $("#inicio").click(function(){
      $("#contenedor").animate({ left: "+=200" }, 2000 )
      .queue(function() {
        $( this ).addClass( "newcolor" ).dequeue();
      }).delay(2000).animate({ left: "-=200" }, 2000)
  });
   
})