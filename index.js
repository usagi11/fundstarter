
var http = require('http');
var fs = require('fs');
var port = Number(process.env.PORT || 8080);
var fileName = 'public/index.html';
var buf = new Buffer(1024);
var synchronous = fs.readFileSync(fileName,{root:__dirname});


http.createServer(function(request, response){
    response.writeHeader(200, {'Content-type' : "text/html"});
    response.write(synchronous);
    response.end();

}).listen(8080);


