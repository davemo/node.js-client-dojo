(function(r, v, runtime) {
  
  r.Main = Backbone.Router.extend({
    initialize: function() {
      _.bindAll(this);
    },
    container: $("#page"),
    routes: {
      "photos"        : "photos",
      "photos/:query" : "photos",
      "*path"         : "home"
    },
    home: function() {
      this._renderPage(new v.Home());
    },
    photos: function(query) {
      this._renderPage(new v.Photos());
      if(query) {
        runtime.Photos.fetch({ query: query });
      }
    },
    _renderPage: function(view) {
      this.container.empty().append(view.render().el);
    }
  });
  
})(APP.Routers, APP.Views, APP.Runtime);