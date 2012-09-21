(function() {

  _.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };

  var spinner = new Spinner({
    lines: 5,
    length: 6,
    width: 5, 
    radius: 0,
    corners: 1.0,
    rotate: 0,
    trail: 62,
    speed: 0.9 
  });

  $("body").ajaxStart(function() { spinner.spin($(".loading").get(0)); });
  $("body").ajaxStop(function () { spinner.stop($(".loading").get(0)); });

})();