Template.postPage.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  }
});

Template.postPage.onRendered(function() {
    $('.textoCompleto').each(function(){

      var texto=$(this).text();
     
      $(this).html(texto);

    });

});


Template.postItemAdmin.onRendered(function() {
    $('.textoCompleto').each(function(){

      var texto=$(this).text();
     
      $(this).html(texto);

    });

});
