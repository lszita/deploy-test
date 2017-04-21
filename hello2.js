#!/usr/bin/env nodejs

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, { path : '/'} );

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('control', function(direction){
    console.log('direction: ' + direction);
    socket.broadcast.emit('control', direction);
  });

});

http.listen(8081, function(){
  console.log('listening on *:8081');
});