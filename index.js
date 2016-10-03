
var http = require('http');
var fs = require('fs');
var port = Number(process.env.PORT || 8080);
var fileName = 'public/index.html';
var synchronous = fs.readFileSync(fileName,{root:__dirname});
var buf = new Buffer(1024);

//send a file by synchronous
http.createServer(function(request, response){
    response.writeHeader(200, {'Content-type' : "text/html"});
    response.write(synchronous);
    response.end("Synchronous read end");

}).listen(8080);



