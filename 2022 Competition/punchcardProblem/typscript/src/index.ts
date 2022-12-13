import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputs:number[][];

async function main(): Promise<void> {

}

async function readInput(): Promise<> {

}

rl.on('line', function(line:string): void {
    inputs.push([Number(line.split(' ')[0]), Number(line.split(' ')[1])]);
});