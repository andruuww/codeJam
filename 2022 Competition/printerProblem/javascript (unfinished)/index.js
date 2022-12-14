const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputs = [];

async function main() {
    inputs = await readInput();

    console.log(inputs);
}

async function readInput() {
    return new Promise((resolve) => {
        let xs = [];
        rl.on('line', (line) => {
            xs.push(line.split(' '));
        });
        rl.on('close', () => {
            xs.shift();
            for (i of inputs) {
                for (j of i) {
                    j = Number(j);
                }
            }
            resolve(xs);
        });
    });
}

main();