let inputs = [];

const readline = require('readline');
// const { addAbortSignal } = require('stream');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    inputs.push(Number(line.split(' ')[0]), Number(line.split(' ')[1]));
});

rl.on('close', () => {
    inputs.shift();

    for (let i = 0; i < inputs.length; i++) {
        let rows = inputs[i][0];
        let columns = inputs[i][1];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (r < 2 && c < 2) {
                    process.stdout.write('.');
                } else {
                    process.stdout.write('+');
                }
            }
            console.log();
        }
    }
});