const http = require('http');

var server = http.createServer();
var body = [];

server.on('request', function(request, response) {
  request.on('data', function(chunk){
    body.push(chunk);
  }).on('end', function(){
    body = Buffer.concat(body).toString();
    response.end(body.toUpperCase());
  });
});

server.listen(Number(process.argv[2]));
