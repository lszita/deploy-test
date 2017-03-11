#!/usr/bin/env nodejs
const http = require('http');
const mysql = require('mysql');
const connection = mysql.createConnection(process.env.DB_URL);

http.createServer(function (req, res) {

  connection.query('SELECT NOW() AS THE_TIME', (err,dbres,fields) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World from second app the time from db is:' + dbres +  ' \n');
    connection.end((err) => {
      console.log('closed conn');
    });
  });
  
}).listen(8081, 'localhost');
console.log('Server running at http://localhost:8081/');