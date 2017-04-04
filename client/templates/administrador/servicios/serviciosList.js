Template.serviciosList.helpers({
  servicios: function() {
    return Servicios.find({},{
      sort: {submitted: -1}
    });
  }
});