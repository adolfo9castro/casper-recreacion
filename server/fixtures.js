if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Perfil',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Usuarios',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'Invitados',
    url: 'http://themeteorbook.com'
  });
}
