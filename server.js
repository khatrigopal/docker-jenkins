var http = require('http');
var handleRequest = function(request, response) {
	response.writeHead(200);
	response.end("This is  GCP Cloud Testing for Jenkins and Docker and pushh!");
}

var www = http.createServer(handleRequest);
www.listen(8080);
