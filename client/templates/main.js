Meteor.subscribe("userData");

jQuery(document).ready(function($){
	var altoPantalla = $(window).height();
	
	setTimeout(function() {
		$(".container").css({"min-height" : altoPantalla+"px"});
	}, 1000);

	setTimeout(function() {
		$("#containerAlto #main").css({"min-height" : altoPantalla+"px"});
		$("#containerAlto #main").css({"background-color" : "#FFF"});
	}, 2000);
	
});