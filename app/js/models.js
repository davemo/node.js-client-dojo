(function(m) {

  m.FlickrPhoto = Backbone.Model.extend({
    // http://www.flickr.com/services/api/misc.urls.html
    initialize: function() {
      _.bindAll(this);
      this.generateFlickrURL();
    },

    generateFlickrURL: function () {
      var flickrUrl = _.template("http://farm{{farm}}.staticflickr.com/{{server}}/{{id}}_{{secret}}_q.jpg");
      this.set("url", flickrUrl(this.attributes));
    }
  });

})(APP.Models);