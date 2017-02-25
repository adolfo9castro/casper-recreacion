Template.postSubmit.onCreated(function() {
  Session.set('postSubmitErrors', {});
});

Template.postSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      titulo: $(e.target).find('[name=titulo]').val(),
      texto: $(e.target).find('[name=texto]').val(),
      imagen: location.protocol+"//"+location.host + $(e.target).find('[name=imagen]').val()
    };

    var errors = validatePost(post);
    if (errors.titulo || errors.texto)
      return Session.set('postSubmitErrors', errors);

    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);

      // show this result but route anyway
      if (result.postExists)
        throwError('This link has already been posted');

      /*Router.go('postPage', {
        _id: result._id
      });*/

    });
  }
});
