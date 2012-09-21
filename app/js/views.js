(function(v) {

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

  v.Home = v.Page.extend({
    template: JST["app/templates/pages/home.hb"]
  });

  v.Photos = v.Page.extend({
    template: JST["app/templates/pages/photos.hb"]
  });

})(APP.Views);