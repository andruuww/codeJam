let inputs = {
    n: 0,
    testCases: []
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line) {
    if (inputs.n === 0) {
        inputs.n = line
    }
});

rl.on('close', () => {
    console.log("ended line");
});