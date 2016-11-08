const http = require('http');
const url = require('url');

var server = http.createServer(function (request, response) {
  req_url = url.parse(request.url, true);
  date = new Date(req_url['query']['iso']);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  if (req_url['pathname'] == '/api/parsetime') {
    response.end(JSON.stringify({
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }));
  } else if (req_url['pathname'] == '/api/unixtime') {
    response.end(JSON.stringify({
      'unixtime': date.getTime()
    }));
  };
});

server.listen(Number(process.argv[2]));
