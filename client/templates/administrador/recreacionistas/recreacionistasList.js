Template.recreacionistasList.helpers({
  post: function() {
    return Posts.find({},{
      sort: {submitted: -1}
    });
  }
});