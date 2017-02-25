Template.recreacionistaPage.helpers({
  comments: function() {
    return Comments.find({recreacionistaId: this._id});
  }
});
