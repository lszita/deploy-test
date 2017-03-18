#!/usr/bin/env nodejs

const fs = require('fs');
const http = require('http');
const mysql = require('mysql');

console.log('read settings from : ' + process.env.SETTINGS_FILE);

const settings = JSON.parse(fs.readFileSync(process.env.DB_URL,'utf8'));

http.createServer(function (req, res) {

  const connection = mysql.createConnection(settings.db);

  connection.query('SELECT NOW() AS THE_TIME', (err,dbres,fields) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World from second app the time from db is:' + dbres +  ' \n');
    connection.end((err) => {
      console.log('closed conn');
    });
  });
  
}).listen(8081, 'localhost');
console.log('Server running at http://localhost:8081/');