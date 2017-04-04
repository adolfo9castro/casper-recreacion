Template.clientesList.helpers({
  clientes(){ 
  	return Meteor.users.find({},{sort:{'profile.firstname': 1}});
  },

});