Servicios = new Mongo.Collection('servicios');
validateServicio = function (servicio) {
  var errors = {};
  if (!servicio.titulo)
    errors.titulo = "Please fill in a headline";
  if (!servicio.texto)
    errors.texto =  "Please fill in a URL";
  return errors;
}
Servicios.allow({
  update: function(userId, servicio) {
    return ownsDocument(userId, servicio);
  },
  remove: function(userId, servicio) {
    return ownsDocument(userId, servicio);
  },
});

Servicios.deny({
  update: function(userId, servicio, fieldNames, modifier) {
    var errors = validateServicio(modifier.$set);
    return errors.titulo || errors.texto;  }
});

Meteor.methods({
  servicioInsert: function(servicioAttributes) {
    check(Meteor.userId(), String);
    check(servicioAttributes, {
      titulo: String,
      texto: String,
      imagen: String
    });

    var errors = validateServicio(servicioAttributes);
    if (errors.titulo || errors.texto)
      throw new Meteor.Error('invalid-servicio', "You must set a titulo and URL for your servicio");

    var servicioWithSameLink = Servicios.findOne({
      texto: servicioAttributes.texto
    });

    if (servicioWithSameLink) {
      return {
        servicioExists: true,
        _id: servicioWithSameLink._id
      }
    };

    var user = Meteor.user();
    var servicio = _.extend(servicioAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0
    });
    var servicioId = Servicios.insert(servicio);
    return {
      _id: servicioId
    };
  }
});