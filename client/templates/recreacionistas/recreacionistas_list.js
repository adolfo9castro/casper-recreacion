Template.recreacionistasList.helpers({
  recreacionistas: function() {
    return Recreacionista.find({},{
      sort: {submitted: -1}
    });
  }
});
