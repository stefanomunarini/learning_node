const http = require('http');
const bl = require('bl');
const async = require('async');

async.series({
    first: function(callback){
      get_req(process.argv[2], callback);
    },
    second: function(callback){
      get_req(process.argv[3], callback);
    },
    third: function(callback){
      get_req(process.argv[4], callback);
    }}, function(err, results){
       for (result in results) {
         console.log(results[result]);
       };
    });


function get_req(argv, callback) {
  http.get(argv, function(response){
    response.pipe(bl(function (err, data) {
      if (err) console.error(err);
      callback(null, data.toString());
    }));
  });
}
