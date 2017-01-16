Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	waitOn: function() {
		return Meteor.subscribe('post');
	}
});

Router.route('/', {
	name: 'layout'
});

Router.route('/maps', {
	name: 'maps'
});
