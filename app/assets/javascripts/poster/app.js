requirejs.config({
  baseUrl: "/assets/poster",
  shim: {
  	'backbone-min': {
  		deps: ['underscore-min', 'jquery'],
  		exports: 'Backbone'
  	},
  	'underscore-min': {
            exports: '_'
    },
    'feedApp': {
    	deps: ['backbone-min'],
    	exports: 'feedApp'
    },
    'models/feed': {
        deps: ['backbone-min'],
    	exports: 'feedModel'
    }
  }
});


require(['collections/feed'], function(feedCollection){
  new feedCollection;
});

