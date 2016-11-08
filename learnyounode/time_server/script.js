var net = require('net')

function padding(value) {return value < 10 ? '0' + value : value};

var server = net.createServer(function (socket) {
    now = new Date();
    socket.end(padding(now.getFullYear()) + '-' +
               padding(now.getMonth() + 1) + '-' +
               padding(now.getDate()) + ' ' +
               padding(now.getHours()) + ':' +
               padding(now.getMinutes()) + '\n');
});
server.listen(Number(process.argv[2]));
