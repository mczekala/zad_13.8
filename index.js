var http = require('http');
var server = http.createServer();
var fs = require('fs');
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
    	fs.readFile('./index.html',null,function(error, data) {
    		if(error) {
    			response.write('File not found');
    		}
    		else {
    			response.write(data);
    		}
    	})
    } else {
        var img = fs.readFileSync('./image.jpg');
		response.writeHead(200, {'Content-Type': 'image/jpg' });
		response.end(img, 'binary');
    }
});

server.listen(8080);