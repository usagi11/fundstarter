
var http = require('http');
var fs = require('fs');
var port = Number(process.env.PORT || 8080);
var fileName = 'public/index.html';
var synchronous = fs.readFileSync(fileName,{root:__dirname});
var buf = new Buffer(1024);

//send by 
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-type' : 'text/html'});
    res.write(synchronous);
    res.end("Synchronous read end");
}).listen(8080)




