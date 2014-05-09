require(['backbone-min'],function(Backbone){

    var feed = Backbone.Model.extend({
  	  initialize: function(){
  	    alert("Hello from feed");
  	  }
    });

  return feed;

});