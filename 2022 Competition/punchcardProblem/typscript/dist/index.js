"R
async function readInput() {
    return new Promise((resolve) => {
        // create an empty string to store the numbers
        let inputs = [];
        rl.on('line', (line) => {
            // split each line into an array, cast each element into a number, then push
            inputs.push(line.split(' ').map((i) => {
                return Number(i);
            }));
        });
        // when the reader is done, resolve the promise and return values
        rl.on('close', () => {
            resolve(inputs);
        });
    });
}
main();
