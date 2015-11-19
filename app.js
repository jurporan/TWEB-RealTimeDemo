var express = require('express'),
  config = require('./config/config');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

io.on('connection', function(socket)
{
    socket.emit('news', { hello: 'world'});
    socket.on('my other event', function (data)
    {
        console.log(data);
    });
});

var socket = io.connect('http://localhost');
socket.on('news', function
{
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});
