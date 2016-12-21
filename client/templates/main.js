Meteor.subscribe("userData");

jQuery(document).ready(function($){
	var altoPantalla = $(window).height();
	
	setTimeout(function() {
		$(".container").css({"min-height" : altoPantalla+"px"});
		$(".loginIn").css({"top" : altoPantalla/10 +"px"});
	}, 80);
	

})