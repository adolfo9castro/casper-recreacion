Template.publicarServicio.onCreated(function() {
  Session.set('adminAllErrors', {});
});

Template.publicarServicio.helpers({
  errorMessage: function(field) {
    return Session.get('adminAllErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('adminAllErrors')[field] ? 'has-error' : '';
  }
});

Template.publicarServicio.events({

  'submit form': function(e) {
    e.preventDefault();

    var post = {
      titulo: $(e.target).find('[name=titulo]').val(),
      texto: $(e.target).find('[name=texto]').val(),
      imagen: location.protocol+"//"+location.host + $(e.target).find('[name=imagen]').val()
    };

    var errors = validatePost(post);
    if (errors.titulo || errors.texto)
      return Session.set('adminAllErrors', errors);

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

Template.imageUploadTemplate.onRendered( function ( document, window, index ){
  var inputs = document.querySelectorAll( '.inputfile' );
  Array.prototype.forEach.call( inputs, function( input )
  {
    var label  = input.nextElementSibling,
      labelVal = label.innerHTML;

    input.addEventListener( 'change', function( e )
    {
      var fileName = '';
      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        label.querySelector( 'span' ).innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });

    // Firefox bug fix
    input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
    input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
  });
}( document, window, 0 ));
