var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Dog is running');
    setTimeout(function () {
        response.write("Dog is done.");
        response.end();
    }, 5000);
});

server.listen(8080);
console.log('Listening on port 8080 ...');