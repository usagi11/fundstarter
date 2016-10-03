
var http = require('http');
var fs = require('fs');
var port = Number(process.env.PORT || 8080);
var fileName = 'public/index.html';
var synchronous = fs.readFileSync(fileName,{root:__dirname});
var buf = new Buffer(1024);

//send a file by asynchronous

http.createServer(function(req, res){                                                                   fs.readFile(fileName, {root:__dirname}, function(err, data){                                        if(err){                                                                                            res.writeHeader(200, {'Content-type': 'text/html'});                                                res.write("error");                                                                                 res.end();                                                                                          }                                                                                                   else{                                                                                               res.writeHeader(200);                                                                               res.write(data);                                                                                    res.end("Asynchronous read end");                                                                  }                                                                                                })
}).listen(8080);                                                                                     


