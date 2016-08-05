var fs = require('fs');

fs.readFile('server.js', function(error, contents){
    console.log('File done!!!');
    console.log(contents.toString());
});

console.log('End of program');