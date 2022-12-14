import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function main(): Promise<void> {
    let inputs: number[][] = await readInput();

    
    for (let i: number = 0; i < inputs.length; i++) {
        // print test case #
        console.log(`Case #${i+1}:`);
        for (let r: number = 0; r < inputs[i][0]*2+1; r++) {
            let output:string = '';
            for (let c: number = 0; c < inputs[i][1] + 1; c++) {
                if(r < 2 && c < 1) {
                    output += '..'
                } else {
                    if (r%2 === 0) {
                        output += '+-';
                    } else {
                        output += '|.';
                    }
                }
            }
            output = output.slice(0, -1);
            console.log(output);
        } 
    }
}

async function readInput(): Promise<number[][]> {
    return new Promise<number[][]>((resolve) => {
        // create an empty string to store the numbers
        let inputs: number[][] = [];
        rl.on('line', (line:string): void => {
            // split each line into an array, cast each element into a number, then push
            inputs.push(line.split(' ').map((i): number => {
                return Number(i);
            }));
        });
        // when the reader is done, resolve the promise and return values
        rl.on('close', (): void => {
            inputs.shift();
            resolve(inputs);
        });
    });
}

main();