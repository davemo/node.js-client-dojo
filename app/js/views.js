(function(v, runtime) {

  // A very simple "Page" abstraction for our single page app
  v.Page = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this);
    },
    render: function() {
      this.$el.html(this.template());
      if (this.components) {
        _.defer(this.components);
      }
      return this;
    }
  });

  // A few pages
  v.Home = v.Page.extend({
    template: JST["app/templates/pages/home.hb"]
  });

  v.Photos = v.Page.extend({
    template: JST["app/templates/pages/photos.hb"],
    components: function() {
      new v.PhotoSearcher();
      new v.PhotoLister({ collection: runtime.Photos });
    }
  });

  // The Photo Searcher
  v.PhotoSearcher = Backbone.View.extend({
    el: "#photo-searcher",
    events: {
      "submit" : "searchFlickr"
    },
    initialize: function() {
      _.bindAll(this);
    },
    searchFlickr: function(e) {
      e.preventDefault();
      runtime.Photos.fetch({ query: this.$("input").val() });
    }
  });

  // The Photo Lister
  v.PhotoLister = Backbone.View.extend({
    el: "#photo-viewer",
    template: JST["app/templates/components/photo.itemview.hb"],
    initialize: function() {
      _.bindAll(this);
      this.collection.bind("all", this.render);
    },
    render: function() {
      this.$el.empty();
      this.collection.each(function(photo) {
        this.$el.append(this.template(photo.toJSON()));
      }, this);
      return this;
    }
  });

})(APP.Views, APP.Runtime);