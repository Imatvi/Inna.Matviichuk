const http = require('http');
const path = require('path');
const os = require('os');
const hostname = '127.0.0.1';
const port = 5000;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    res.write();
    res.write();
    res.write();
    res.write();
    res.write();
    res.write();
    res.write();
    response.end('Testing NodeJS server\n');
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');

//C:\NodeJS>node server.js
//Server running at http://127.0.0.1:8080/

