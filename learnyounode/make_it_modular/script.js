var ext_module = require('./ext_module.js')

ext_module(process.argv[2], process.argv[3], ext_callback);

function ext_callback(err, files){
  files.forEach(function(el){
    console.log(el);
  });
}
