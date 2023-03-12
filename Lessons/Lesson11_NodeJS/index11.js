const http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Testing NodeJS server\n');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');

//C:\NodeJS>node server.js
//Server running at http://127.0.0.1:8000/

