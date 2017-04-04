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
  $(".delImage").remove();


});

window.fbAsyncInit = function() {
	FB.init({
		appId      : '1318056228245794',
		status     : false,
		xfbml      : true,
		version    : 'v2.7',
	});
};

