
var http = require('http');
var fs = require('fs');
var fileName = 'public/index.html';
var buf = new Buffer(1024);
var port = Number(process.env.PORT || 8080);
var synchronous = fs.readFileSync(fileName, {root:__dirname});

http.createServer(function(req,res){
    fs.readFile(fileName, {root:__dirname}, function(err, file){
	if(err){
	    res.writeHeader(200,{'Content-type' : 'text/html'});
	    res.write("error");
	    res.en();
	    }
	else{
	    res.writeHeader(200,{'Content-typt' : 'text/html'});
	    res.write(file);
	    res.end("Asynchronous read end");
	}
});




//send using fs.open(), fs.stat(), fs.read()
/*
http.createServer(function(res,res){
    fs.exists(fileName, function(exists){
	if(exists){
	    fs.stat(fileName, function(error, stats){
		fs.open(fileName, 'r' , function(err, fd){
		    var buffer = new Buffer(stats.size);
		        fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead, buffer){
			    var data = buffer.toString('utf8', 0 , buffer.length);
			    res.writeHeader(200, {'Content-type' : 'text/plain'});
			    res.write("Read file by fs.read()\n");
			    res.write(data);
			    res.end();
			    fs.close(fd);
			});
		    });
		});
	    }
	});
}).listen(port)
*/
/*http.createServer(function(req,res){
    res.writeHeader(200, {'Content-type': 'text/html'});
    res.write(synchronous);
    res.end("Synchronous read end");*/
}).listen(port)



