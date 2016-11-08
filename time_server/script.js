var net = require('net')
var server = net.createServer(function (socket) {
    now = new Date();
    month = now.getMonth() + 1;
    day = now.getDate();
    if (day<10){
      day = 0 + '' + day;
    }
    date = now.getFullYear() + '-' + month + '-' + day + ' ' + now.getHours() + ':' + now.getMinutes();
    socket.write(date);
    socket.end();
});
server.listen(Number(process.argv[2]));

