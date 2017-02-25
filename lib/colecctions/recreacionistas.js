Recreacionistas = new Mongo.Collection('recreacionistas');

validateRecreacionistas = function (recreacionista) {
  var errors = {};
  if (!recreacionista.nombre)
    errors.nombre = "Please fill in a headline";
  if (!recreacionista.oficio)
    errors.oficio =  "Please fill in a URL";
  return errors;
}

Recreacionistas.allow({
  update: function(userId, recreacionista) {
    return ownsDocument(userId, recreacionista);
  },
  remove: function(userId, recreacionista) {
    return ownsDocument(userId, recreacionista);
  },
});

Recreacionistas.deny({
  update: function(userId, recreacionista, fieldNames, modifier) {
    var errors = validateRecreacionistas(modifier.$set);
    return errors.nombre || errors.oficio || errors.cedula;  }
});

Meteor.methods({
  recreacionistaInsert: function(recreacionistaAttributes) {
    check(Meteor.userId(), String);
    check(recreacionistaAttributes, {
      nombre: String,
      oficio: String,
      cedula: String,
      imagen: String
    });

    var errors = validateRecreacionistas(recreacionistaAttributes);
    if (errors.nombre || errors.oficio || errors.cedula)
      throw new Meteor.Error('invalid-recreacionista', "You must set a titulo and URL for your recreacionista");

    var recreacionistaWithSameLink = Recreacionistas.findOne({
      texto: recreacionistaAttributes.texto
    });

    if (recreacionistaWithSameLink) {
      return {
        recreacionistaExists: true,
        _id: recreacionistaWithSameLink._id
      }
    };

    var user = Meteor.user();
    var recreacionista = _.extend(recreacionistaAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0
    });
    var recreacionistaId = Recreacionistas.insert(recreacionista);
    return {
      _id: recreacionistaId
    };
  }
});


ImageUploadRecreacionistas = new FS.Collection("imageUploadRecreacionistas", {
  stores: [new FS.Store.FileSystem("imageUploadRecreacionistas", {path: "~/uploads/recreacionistas"})]
});
ImageUploadRecreacionistas.allow({
  insert: function (userId, image) {
    return true;
  },
  update: function(userId, image) {
    return true
  },
  remove: function(userId, image) {
    return true
  },
  download: function(userId, image) {
    return true
  }
});
