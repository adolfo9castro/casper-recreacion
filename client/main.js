Meteor.subscribe("userData");
Meteor.subscribe("posts");

Meteor.subscribe("imageUploadPost");

Template.imageUploadPostTemplate.helpers({
  imagenUpload: function () {
    return ImageUploadPost.find({userId: this._id})
  }
});

Template.imageUploadPostTemplate.onRendered(function() {
    $(".delImage").remove();
});


Template.imageUploadPostTemplate.events({

  'click #deleteFileButton ': function (event) {
    ImageUploadPost.remove({_id: this._id});
  },

  'change .your-upload-class': function (event, template) {
    FS.Utility.eachFile(event, function (file) {
      var yourFile = new FS.File(file);
      ImageUploadPost.insert(yourFile);
    });
  }
});



import "../public/js/WebFontConfig.js";
import "../public/js/pushmenu.js";
