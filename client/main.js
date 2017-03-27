Meteor.subscribe("userData");
Meteor.subscribe("posts");
Meteor.subscribe("imageUploadPost");

import "../public/js/WebFontConfig.js";
import "../public/js/pushmenu.js";

Template.adminAll.onRendered(function() {
  $(".delImage").remove();
});



