module.exports = function (file_path, extension, callback) {
  var fs = require('fs');
  var path = require('path');
  
  fs.readdir(file_path, readdir_callback);
  file_extension = '.' + extension;

  results = [];
  function readdir_callback(err, files){
    if (err) {
      return callback(err);
    }
    files.forEach(function(el){
      if (path.extname(el) == file_extension){
        results.push(el);
      }
    });
    return callback(null, results);
  }
}
