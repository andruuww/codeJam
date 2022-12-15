import readline from 'readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false 
});

interface Case {
    caseNum: number,
    printers: number[][]
}

async function main(): Promise<void> {
    let input: Case[] = await readInput();
    for (let c of input) {
        process.stdout.write(`Case #${c.caseNum}: `);

        let lowestColors:number[] = [];

        for (let i: number = 0; i < c.printers[0].length; i++) {
            for (let j: number = 0; j < c.printers.length; j++) {
                if (lowestColors[i] == null || c.printers[j][i] <= lowestColors[i]) {
                    lowestColors[i] = c.printers[j][i];
                }
            }
        }

        let sum: number = 0;
        for (let num of lowestColors) {
            sum += num;
        }

        let difference: number = 1000000 - sum;
        if (difference <= 0) {
            for (let num of lowestColors) {
                process.stdout.write(`${num} `);
            } 
        } else {
            process.stdout.write('IMPOSSIBLE')
        }
        console.log();
    }
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