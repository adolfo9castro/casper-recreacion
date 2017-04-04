Meteor.subscribe("userData");
Meteor.subscribe("posts");
Meteor.subscribe("servicios");
Meteor.subscribe("clientes");
Meteor.subscribe("recreacionistas");
Meteor.subscribe("imageUploadPost");

import "../public/js/pushmenu.js";
import "../public/js/WebFontConfig.js";

Meteor.startup(function() {
	GoogleMaps.load({
		key: 'AIzaSyAEizQjHZkSIdcobPOmENAJh87_fp0Aeb8',
		libraries: 'places'  // also accepts an array if you need more than one
	});
});

Template.adminAll.onRendered(function() {
  setTimeout(function(){
  	$(".delImage").remove();

  	$(".agregarNoticia a").click(function(){
        $(".contenedorNoticiasList").fadeOut("fast");
        $(".contenedorPublicarNoticia").fadeIn("slow")
      });

      $(".listNoticias a").click(function(){
        $(".contenedorPublicarNoticia").fadeOut("fast");
        $(".contenedorNoticiasList").fadeIn("slow")
      });

      $(".listServicios a").click(function(){
        $(".contenedorPublicarNoticia").fadeOut("fast");
        $(".contenedorNoticiasList").fadeOut("fast");
        $(".contenedorNoticiasList.serviciosList").fadeIn("slow")
      });

      $(".agregarServiciosList a").click(function(){
        $(".contenedorPublicarNoticia").fadeOut("fast");
        $(".contenedorNoticiasList").fadeOut("fast");
        $(".contenedorNoticiasList.serviciosList").fadeOut("fast");
        $(".contenedorPublicarServicio.publicarServicio").fadeIn("slow")
      });

      $(".listRecreacionistas a").click(function(){
        $(".contenedorPublicarNoticia").fadeOut("fast");
        $(".contenedorNoticiasList").fadeOut("fast");
        $(".contenedorNoticiasList.serviciosList").fadeOut("fast");
        $(".contenedorPublicarServicio.publicarServicio").fadeOut("fast");
        $(".contenedorNoticiasList.recreacionistasList").fadeIn("slow");
      });

      $(".agregarRecreacionista a").click(function(){
        $(".contenedorPublicarNoticia").fadeOut("fast");
        $(".contenedorNoticiasList").fadeOut("fast");
        $(".contenedorNoticiasList.serviciosList").fadeOut("fast");
        $(".contenedorPublicarServicio.publicarServicio").fadeOut("fast");
        $(".contenedorNoticiasList.recreacionistasList").fadeOut("fast");
        $(".contenedorPublicarRecreacionista.publicarRecreacionista").fadeIn("slow");
      });

      $(".listClientes a").click(function(){
        $(".contenedorPublicarNoticia").fadeOut("fast");
        $(".contenedorNoticiasList").fadeOut("fast");
        $(".contenedorNoticiasList.serviciosList").fadeOut("fast");
        $(".contenedorPublicarServicio.publicarServicio").fadeOut("fast");
        $(".contenedorNoticiasList.recreacionistasList").fadeOut("fast");
        $(".contenedorPublicarRecreacionista.publicarRecreacionista").fadeOut("fast");
        $(".contenedorClientesList.clientesList").fadeIn("slow");
      });
  }, 1000)
});

window.fbAsyncInit = function() {
	FB.init({
		appId      : '1318056228245794',
		status     : false,
		xfbml      : true,
		version    : 'v2.7',
	});
};

