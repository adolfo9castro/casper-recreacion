Template.recreacionistaSubmit.onCreated(function() {
  Session.set('recreacionistaSubmitErrors', {});
});

Template.recreacionistaSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('recreacionistaSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('recreacionistaSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.recreacionistaSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var recreacionista = {
      nombre: $(e.target).find('[name=nombre]').val(),
      oficio: $(e.target).find('[name=oficio]').val(),
      cedula: $(e.target).find('[name=cedula]').val(),
      imagen: location.protocol+"//"+location.host + $(e.target).find('[name=imagen]').val()
    };

    var errors = validatePost(recreacionista);
    if (errors.titulo || errors.texto)
      return Session.set('recreacionistaSubmitErrors', errors);

    Meteor.call('recreacionistaInsert', recreacionista, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);

      // show this result but route anyway
      if (result.recreacionistaExists)
        throwError('This link has already been recreacionistaed');

      /*Router.go('recreacionistaPage', {
        _id: result._id
      });*/

    });
  }
});
