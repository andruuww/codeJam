const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputs = [];
rl.on('line', (line) => {
    inputs.push([Number(line.split(' ')[0]), Number(line.split(' ')[1])]);
});

rl.on('close', () => {
    inputs.shift();
    
    for (let i = 0; i < inputs.length; i++) {
        console.log('Case #' + (i+1) + ':');

        for (let r = 0; r < inputs[i][0] * 2 + 1; r++) {
            let lineOut = "";
            for (let c = 0; c < inputs[i][1] + 1; c++) {
                if (r < 2 && c < 1) {
                    lineOut += "..";
                } else {
                    if (r%2 == 0) {
                        lineOut += "+-"
                    } else {
                        lineOut += "|."
                    }
                }
            }
            console.log(lineOut.slice(0, -1));
        }
    }
});