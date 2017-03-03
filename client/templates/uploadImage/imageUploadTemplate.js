Template.imageUploadTemplate.helpers({
  imagenUpload: function () {
    return ImageUploadPost.find({userId: this._id})
  }
});

Template.imageUploadTemplate.events({
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

jQuery(document).ready(function($) {
  setTimeout(function(){
    $(".delImage").remove();
  }, 1000);
});