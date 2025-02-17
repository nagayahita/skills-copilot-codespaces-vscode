// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file when a GET request is made to the /comments route. Use the fs module to read the comments.json file and serve the contents as a JSON response.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  fs.createReadStream('./comments.json').pipe(res);
}).listen(3000);