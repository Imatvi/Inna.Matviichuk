const http = require('http');
const path = require('path');
const os = require('os');
const hostname = '127.0.0.1';
const port = 5000;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>System information</h2>");
    res.write("Current username: " + os.userInfo().username);
    res.write("<br>");
    res.write("Type of OS: " + os.type());
    res.write("<br>");
    res.write("System work time: " + (os.uptime()/60).toFixed(2) + "minutes");
    res.write("<br>");
    res.write("Current work directory: " + path.dirname(__filename));
    res.write("<br>");
    res.end(`Server file name: ` + path.basename(__filename));
  }).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');

//C:\NodeJS>node server.js
//Server running at http://127.0.0.1:8080/

