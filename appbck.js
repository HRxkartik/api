const fs=require('fs')
var http = require('http');
const std=require('./Model/studentlist')
http.createServer(function (req, res) {
    res.write(JSON.stringify(std.student)); //write a response to the client
    res.end(); //end the response
}).listen(8080);
// fs.appendFile('mynewfile3.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });
// fs.rename('sum.js', 'myrenamedfile.js', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });