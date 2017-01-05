Meteor.subscribe("userData");

var googlefonts = require("googlefonts").googlefonts;

console.log(googlefonts)

jQuery(document).ready(function($){
	var altoPantalla = $(window).height();
	
	setTimeout(function() {
		$(".container").css({"min-height" : altoPantalla+"px"});
	}, 1000);

	setTimeout(function() {
		$("#containerAlto #main").css({"min-height" : altoPantalla+"px"});
		$("#containerAlto #main").css({"background-color" : "#FFF"});
	}, 1500);
	
});