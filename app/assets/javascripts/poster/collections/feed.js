define(['backbone-min','models/feed'],function(Backbone,feedModel){
  var feedCollection = Backbone.Collection.extend({
  	initialize: function(){
  		alert("Hello from collection");
  	},
  	model: feedModel
  });
  return(feedCollection);
});