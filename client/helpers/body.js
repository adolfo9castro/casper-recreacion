Template.layout.onRendered(function() {

  var altoPantalla = $(window).height();
  $("#containerAlto.container").css({"min-height" : altoPantalla+"px"});

  setTimeout(function(){
    $(".loaderContent").fadeOut("slow");
    $("#map").css({"min-height" : altoPantalla+"px"});
    setTimeout(function(){
      $(".loaderContent").remove();
    }, 900);

    $("#geolocalizacion").click(function(){
      $(".mapas").fadeIn();
      $(".recreacionistas").fadeOut("fast");
      $(".noticias").fadeOut("fast");
      $(".amiguitos").fadeOut("fast");
    });
    $("#recreacionistas").click(function(){
      $(".recreacionistas").fadeIn();
      $(".mapas").fadeOut("fast");
      $(".noticias").fadeOut("fast");
      $(".amiguitos").fadeOut("fast");
    });
    $("#amiguitos").click(function(){
      $(".amiguitos").fadeIn();
      $(".recreacionistas").fadeOut("fast");
      $(".mapas").fadeOut("fast");
      $(".noticias").fadeOut("fast");

    })
    $("#noticias").click(function(){
      $(".noticias").fadeIn();
      $(".recreacionistas").fadeOut("fast");
      $(".mapas").fadeOut("fast");
      $(".amiguitos").fadeOut("fast");
    })

  }, 1000);



});
