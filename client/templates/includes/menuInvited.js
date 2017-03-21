/*Template.menuInvited.onRendered(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertAfter(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/

Template.menuInvited.events(function(){
	var link = "https://play.google.com/store/apps/details?id=com.smarttree.recreacion.desarrollo";
	var app_id = "1318056228245794";
	window.open('fb-messenger://share?link=' + encodeURIComponent(link) + '&app_id=' + encodeURIComponent(app_id));
})
