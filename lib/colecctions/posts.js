Posts = new Mongo.Collection('posts');
validatePost = function (post) {
  var errors = {};
  if (!post.titulo)
    errors.titulo = "Please fill in a headline";
  if (!post.texto)
    errors.texto =  "Please fill in a URL";
  return errors;
}
Posts.allow({
  update: function(userId, post) {
    return ownsDocument(userId, post);
  },
  remove: function(userId, post) {
    return ownsDocument(userId, post);
  },
});

Posts.deny({
  update: function(userId, post, fieldNames, modifier) {
    var errors = validatePost(modifier.$set);
    return errors.titulo || errors.texto;  }
});

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      titulo: String,
      texto: String,
      imagen: String
    });

    var errors = validatePost(postAttributes);
    if (errors.titulo || errors.texto)
      throw new Meteor.Error('invalid-post', "You must set a titulo and URL for your post");

    var postWithSameLink = Posts.findOne({
      texto: postAttributes.texto
    });

    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      }
    };

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  }
});


ImageUploadPost = new FS.Collection("imageUploadPost", {
  stores: [new FS.Store.FileSystem("imageUploadPost", {path: "uploads"})]
});
ImageUploadPost.allow({
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

