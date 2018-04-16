function getAndPrintHTML (options) {

  /* Add your code here */
  var https= require('https'); //getting https module



  https.get(options, function(response){ //.get() gets the resource of the host + path of the file. response is "file" or data that the .get retrieves

  response.setEncoding('utf8'); // I am setting the character coding(?) to be in uniform of uft8

  var string="";

  response.on('data', function(data){
      //data is used to retrieve each chunks of data.
    string+=data; // I am adding each chunks of data to an empty string.
    response.on('end', function(end){
      console.log(string); // I am using .on('end') to let the program know that when there's no more readable data, only then log the variable string.
      });
    });
  });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);