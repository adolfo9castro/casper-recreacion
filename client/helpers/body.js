Template.layout.onRendered(function() {

  var altoPantalla = $(window).height();
  $("#containerAlto.container").css({"min-height" : altoPantalla+"px"});

  setTimeout(function(){
    $(".loaderContent").fadeOut("slow");
    $("#map").css({"min-height" : altoPantalla+"px"});
    setTimeout(function(){
      $(".loaderContent").remove();
    }, 900);
  }, 1000);

});
