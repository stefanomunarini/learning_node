const http = require('http');
const fs = require('fs');

var server = http.createServer(function (request, response) {
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(response);
});

server.listen(Number(process.argv[2]));
