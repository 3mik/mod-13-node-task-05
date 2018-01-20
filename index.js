var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer();

server.on('request', function (request, response) {     
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");        
        fs.readFile('./public/index.html', function(err,content){			
			if(!err){				
				response.end(content);
			} else {				
				console.dir(err);
			};
		});
    } else {
        response.setHeader("Content-Type", "image/jpeg; charset=utf-8");
        fs.readFile('./public/error-404.jpg', function(err,content){			
			if(!err){				
				response.end(content);
			} else {				
				console.dir(err);
			};
		});
    }
});

server.listen(8080);
console.log('Server http is running on port 8080')