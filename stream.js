var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    request.on('readable', function() {
       var chunk = null; 
       while(null !== (chunk = request.read())){
           response.write(chunk);
           console.log(chunk.toString());
       }
    });
    request.on('end', function() {
        response.end();
        console.log('end!');
    });
}).listen(8080);

