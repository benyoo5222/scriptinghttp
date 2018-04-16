var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printreverse (html) {

  /* Write your code here! */
  var result="";
  for(var a=1; a < html.length; a++){
    result+= html[html.length-a];
  }
  console.log(result);
}

getHTML(requestOptions, printreverse);
