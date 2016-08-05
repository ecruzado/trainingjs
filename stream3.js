var fs = require('fs');

var file = fs.createReadStream('server.js');
var newFile = fs.createWriteStream('server_copy.js');

file.pipe(newFile);