const http = require("http");
const path = require("path");
const os = require("os");
const hostname = '127.0.0.1';
const port = 5000;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<h2>System information</h2>");
    response.write("Current user name: " + os.userInfo().username + "<br>");
    response.write("OS type: " + os.type() + "<br>");
    response.write("System work time: " + (os.uptime()/60).toFixed(2) + "minutes" + "<br>");
    response.write("Current work directory: " + path.dirname(__filename) + "<br>");
    response.end(`Server file name: ` + path.basename(__filename) + "<br>");
  }).listen(5000);

console.log('Server running at http://127.0.0.1:5000/ ...');

//C:\NodeJS>node server.js
//Server running at http://127.0.0.1:8080/

