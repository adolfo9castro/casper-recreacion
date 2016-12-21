Template.loginFacebook.helpers({
    currentUser: function(){
        if(Meteor.user()){
            return Meteor.user();
        }
        else{
            return false;
        }
    }
});