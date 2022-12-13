import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

async function main(): Promise<void> {
    let inputs: number[][] = await readInput();

    for (let i of inputs) {
        console.log(i);
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
            resolve(inputs);
        });
    });
}

main();