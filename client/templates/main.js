Meteor.subscribe("userData");
if (Meteor.isClient) {
	WebFontConfig = {
      google: { families: ['Rancho', 'PT Sans' ] }
    };    

    jQuery(document).ready(function($){
		var altoPantalla = $(window).height();
		
		setTimeout(function() {
			$(".container").css({"min-height" : altoPantalla+"px"});
			var wf = document.createElement('script');
		      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		      wf.type = 'text/javascript';
		      wf.async = 'true';
		      var s = document.getElementsByTagName('script')[0];
		      s.parentNode.insertBefore(wf, s);
		      console.log("async fonts loaded", WebFontConfig);
		}, 1000);
	});
}