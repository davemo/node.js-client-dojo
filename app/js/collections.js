(function(c, m) {

  c.Photos = Backbone.Collection.extend({
    url: '/stubs/flickr.lolcats.json',
    model: m.FlickrPhoto,
    parse: function(response) {
      return response.photos.photo;
    }
  });
  
  // c.Photos = Backbone.Collection.extend({
  //   url: '/proxy/photos/',
  //   model: m.FlickrPhoto,
  //   fetch: function(options) {
  //     options.url = this.url + options.query;
  //     // http://documentcloud.github.com/backbone/docs/backbone.html#section-98
  //     Backbone.Collection.prototype.fetch.call(this, options);
  //   },
  //   parse: function(response) {
  //     return response.photos.photo;
  //   }
  // });

})(APP.Collections, APP.Models);