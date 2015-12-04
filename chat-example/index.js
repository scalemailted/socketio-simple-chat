
//Setup
var express = require('express')
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

//routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//sockets - broabcast
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//listener
http.listen(process.env.PORT);

/*
http.listen(process.env.PORT, function(){
  console.log('listening on *:LocalHost');
});
*/