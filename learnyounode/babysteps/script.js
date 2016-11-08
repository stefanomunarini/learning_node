argv = process.argv.slice(2, process.argv.length);

sum = 0;
for (var i=0; i<argv.length; i++){
  sum += Number(argv[i]);
}

console.log(sum);
