import readline from 'readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false 
});

interface Case {
    caseNum: number,
    printers: number[][];
}

async function main(): Promise<void> {
    let input: Case[] = await readInput();
    console.log(input);
}

async function readInput(): Promise<Case[]> {
    return new Promise<Case[]>((resolve): void => {
        let input: Case[] = [];
        rl.on('line', (line): void => {
            // skip first line
            if (input[0] == null) {
                input.push({
                    caseNum: input.length + 1,
                    printers: []
                });
                return;
            }
            // create new Case array every 3 inputs
            if (input[input.length-1].printers.length >= 3) {
                input.push({
                    caseNum: input.length + 1,
                    printers: []
                });
            }
            input[input.length-1].printers.push(line.split(' ').map((x): number => {
                return Number(x);
            }));
        });
        rl.on('close', (): void => {
            resolve(input);
        })
    });
}

main();