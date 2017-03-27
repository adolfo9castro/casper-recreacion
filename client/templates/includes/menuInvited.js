Template.menuInvited.onRendered(function() {
    $("#facebook_friends").on("click",function(){
    	console.log("Hola")
	    FB.ui({
	        method: 'apprequests',
	        message: 'Invitación a mi aplicación de facebook unodepiera'
	    });
    })
});