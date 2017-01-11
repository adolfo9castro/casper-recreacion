Template.menu.onRendered(function() {

  var altoPantalla = $(window).height();
  $(".container").css({"min-height" : altoPantalla+"px"});

  $('#menuOpen').pushmenu({ button : "#openMenuPerfil" });

})
