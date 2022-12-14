import readline from 'readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false 
});

async function main(): Promise<void> {
    let input: Number[][][] = await readInput();
    console.log(input);
}

async function readInput(): Promise<Number[][][]> {
    return new Promise<Number[][][]>((resolve) => {
        let input: Number[][][] = [];
        rl.on('line', (line): void => {
            // skip first line
            if (input[0] == null) {
                input.push([])
                return;
            }
            // create new case array every 3 inputs
            if (input[input.length-1].length >= 3) {
                input.push([]);
            }
            input[input.length-1].push(line.split(' ').map((x) => {
                return Number(x);
            }));
        });
        rl.on('close', (): void => {
            resolve(input);
        })
    });
}

main();