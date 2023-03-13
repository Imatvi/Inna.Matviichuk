const http = require("http");
const greeting = require('./personalmodule');
const os = require("os");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    let userName = os.userInfo().userName;

    response.write(`Date of request: ${greeting.date}<br>`);
    response.write(greeting.showMessage(userName));
    response.end();
}).listen(8000);

console.log('Server runnind at http://127.0.0.1:8000/');