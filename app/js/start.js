(function(routers, runtime, collections) {

  runtime.Photos = new collections.Photos();

  new routers.Main();
  Backbone.history.start();

})(APP.Routers, APP.Runtime, APP.Collections);