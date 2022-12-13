"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
async function main() {
    let inputs = await readInput();
    for (let i of inputs) {
        console.log(i);
    }
}
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
