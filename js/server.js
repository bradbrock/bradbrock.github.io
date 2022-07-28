console.log("Serve some pages baby!");

const http = require('http');
const fs = require('fs');

var nStatic = require('node-static');
var fileServer = new nStatic.Server();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World\n');
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res);
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});

// server.listen(process.env.PORT || 3000);

http.createServer(function (req, res) {
  fileServer.serve(req, res);
}).listen(5000);