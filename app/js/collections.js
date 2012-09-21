(function(c, m) {

  c.Photos = Backbone.Collection.extend({
    url: '/proxy/photos/',
    model: m.FlickrPhoto,
    initialize: function() {
      _.bindAll(this);
    },
    fetch: function(params) {
      $.ajax({
        type: 'GET',
        url: this.url + params.query,
        success: this.success
      });
    },
    success: function(response) {
      this.reset(response.photos.photo);
    }
  });

})(APP.Collections, APP.Models);