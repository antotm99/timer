let args = process.argv.slice(2);
//console.log(args);

const timer = function(args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0 || undefined || isNaN(args[i])) {
      return;
    } else {
    setTimeout(() => {
      process.stdout.write('.');
      process.stdout.write(args[i]);
    } ,args[i] * 1000)
    }
  }
}
timer(args);