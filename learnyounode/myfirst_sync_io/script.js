var fs = require('fs');

file_name = process.argv[2];
console.log(fs.readFileSync(process.argv[2], 'utf-8').split('\n').length-1);
