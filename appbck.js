const fs=require('fs')
var http = require('http');
const std=require('./Model/studentlist')
http.createServer(function (req, res) {
    res.write(JSON.stringify(std.student)); 
    res.end();
}).listen(8080);

