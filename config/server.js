var express            = require('express'), 
    request            = require('request'),
    app                = express.createServer(),
    FLICKR_KEY      = "dc43133eacbf9aa77ba291e2893c9caa",
    FLICKR_API_ROOT = "http://api.flickr.com/services/rest/?per_page=30&nojsoncallback=1&format=json&api_key=" + FLICKR_KEY;

app.configure(function() {
  app.use(express.static(process.cwd() + "/generated"));
  app.use("/stubs", express.static(process.cwd() + "/stubs"));
  app.use(express.bodyParser());
  app.use(express.errorHandler());
});

app.get('/proxy/photos/:tags', function(req, res) { // /proxy/photos/cows
  // http://www.flickr.com/services/api/flickr.photos.search.html
  var uri = FLICKR_API_ROOT + "&tags=" + req.params.tags + "&method=flickr.photos.search";
      
  request.get(uri, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.contentType('application/json');
      res.send(body);
    } else {
      res.send("flickr proxy error: " + error);
    }
  });
});

module.exports = app;
