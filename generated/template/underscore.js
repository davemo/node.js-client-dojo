this['JST'] = this['JST'] || {};

this['JST']['app/templates/hello.us'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="hello">\n  '+
( text )+
'\n</div>';
}
return __p;
};

this['JST']['app/templates/homepage.us'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<!DOCTYPE html>\n<html>\n  <head>\n    <title>'+
( pkg.name )+
'</title>\n\n    <link rel="stylesheet" type="text/css" href="'+
( css )+
'" media="all" />\n  </head>\n  <body>\n    <script type="text/javascript" src="'+
( js )+
'"></script>\n  </body>\n</html>';
}
return __p;
};