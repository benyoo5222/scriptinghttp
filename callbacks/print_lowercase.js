var getHTML = require('../http-functions.js');// i have to put one more dot to go up one more level to find the module.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printlowercase (html) {

  /* Write your code here! */
  var result = html.toLowerCase(); //I am using .toLowerCase() to make it uppercase because the data type is string.
  console.log(result);

}

getHTML(requestOptions, printlowercase);
