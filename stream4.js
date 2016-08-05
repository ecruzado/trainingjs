var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream('copy.pdf');
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;

    response.write("Length: "+ fileBytes);
    request.on('readable', function() {
       var chunk = null; 
       while(null !== (chunk = request.read())){
           uploadedBytes += chunk.length;
           //var progress = (uploadedBytes / fileBytes) * 100;
           //response.write("progress: "+ parseInt(progress, 10) + "%\n");
           response.write("progress: "+ uploadedBytes + "%\n");
       }
    });

    request.pipe(newFile);

    request.on('end', function() {
        response.end("Completed!");
    });    
}).listen(8080);