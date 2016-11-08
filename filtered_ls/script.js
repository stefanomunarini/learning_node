var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], callback);
file_extension = '.' + process.argv[3];

results = [];
function callback(err, files){
  files.forEach(function(el){
    if (path.extname(el) == file_extension){
      console.log(el);
    }
  });
}
