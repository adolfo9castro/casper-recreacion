Meteor.subscribe("userData");
Meteor.subscribe("posts");
Meteor.subscribe("imageUploadPost");

import "../public/js/WebFontConfig.js";
import "../public/js/pushmenu.js";

Template.adminAll.onRendered(function() {
  $(".delImage").remove();
});

window.fbAsyncInit = function() {
	FB.init({
		appId      : '1318056228245794',
		status     : true,
		xfbml      : true,
		version    : 'v2.7',
	});
};



