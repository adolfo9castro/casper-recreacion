Template.menuInvited.onRendered(function() {	
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.7&appId=1318056228245794";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

    /*$("#facebook_friends").on("click",function(){
	    FB.ui({
	        method: 'apprequests',
	        message: 'Invitación a mi aplicación de facebook unodepiera'
	    });
    })*/


       
});