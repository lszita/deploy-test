#!/usr/bin/env nodejs

const http = require('http');

http.createServer(function (req, res) {
  
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');

}).listen(8081, 'localhost');





console.log('Server running at http://localhost:8081/');