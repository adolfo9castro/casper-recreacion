Router.configure({
  layoutTemplate: function(){
    var urlLayout = location.pathname;
    if (urlLayout == "/admin")
      return 'adminAll';  
    else return 'layout';
  },
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function(){
    return [Meteor.subscribe('notifications')]
  }
});

/*
Router.route('/', {
  name: 'postsList'
});*/

PostsListController = RouteController.extend({
  template: 'postsList',
  increment: 4,
  postsLimit: function() {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function() {
    return {
      sort: {
        submitted: -1
      },
      limit: this.postsLimit()
    };
  },

  subscriptions: function() {
    this.postsSub = Meteor.subscribe('posts', this.findOptions());
  },

  posts: function() {
    return Posts.find({}, this.findOptions());
  },  data: function() {
    var hasMore = this.posts().count() === this.postsLimit();
    var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});
    return {
      posts: this.posts(),
      ready: this.postsSub.ready,
      nextPath: hasMore ? nextPath : null
    };
  }
});

Router.route('/noticias/:_id', {
  name: 'postPage',
  waitOn: function(){
    return [
      Meteor.subscribe('singlePost', this.params._id),
    ];
  },
  data: function(){
    return Posts.findOne(this.params._id);
  }
});

Router.route('/noticias/:_id/edit', {
  name: 'postEdit',
  waitOn: function() {
    return Meteor.subscribe('singlePost', this.params._id);
  },
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

Router.route('/:postsLimit?', {
  name: 'postsList',
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound',{
  only: 'postPage'
});

Router.onBeforeAction(requireLogin, {
  only: 'adminAll',
});
