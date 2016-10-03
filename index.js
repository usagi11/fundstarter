
var http = require('http');
var fs = require('fs');
var port = Number(process.env.PORT || 8080);
var fileName = 'public/index.html';
var synchronous = fs.readFileSync(fileName,{root:__dirname});
var buf = new Buffer(1024);
/*
http.createServer(function(request, response){
    response.writeHeader(200, {'Content-type' : "text/html"});
    response.write(synchronous);
    response.end("Synchronous read end");

}).listen(8080);
*/
/*
http.createServer(function(req, res){
    fs.readFile(fileName, {root:__dirname}, function(err, data){
    if(err){
    res.writeHeader(200, {'Content-type': 'text/html'});
    res.write("error");
    res.end();
    }
    else{
    res.writeHeader(200);
    res.write(data);
    res.end("Asynchronous read end");
   }
}).listen(8080);
*/

http.createServer(function(req, res){
    fs.open(fileName, 'r', function(err, fd){
	if(err){
	    res.writeHeader(200, {'Contetnt-type' : 'text/txt'});
	    res.write(err);
	    res.end();
	}
	else{
	    fs.stat(fileName, function(err, stats){
		if(err){
		    res.writeHeader(200);
		    res.write(stats);
		    res.end();
		}
		else{
		   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
		       if(err){
			   res.writeHeader(200);
			   res.write(err);
			   res.end();
		       }
		       else{
			   res.writeHeader(200);
			   res.write(bytes);
			   res.end();
		      }
		});
	}
});
}
});


}).listen(8080);
		  
