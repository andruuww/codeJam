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
    let input = await readInput();
    console.log(input);
}
async function readInput() {
    return new Promise((resolve) => {
        let input = [];
        rl.on('line', (line) => {
            // skip first line
            if (input[0] == null) {
                input.push({
                    caseNum: input.length + 1,
                    printers: []
                });
                return;
            }
            // create new Case array every 3 inputs
            if (input[input.length - 1].printers.length >= 3) {
                input.push({
                    caseNum: input.length + 1,
                    printers: []
                });
            }
            input[input.length - 1].printers.push(line.split(' ').map((x) => {
                return Number(x);
            }));
        });
        rl.on('close', () => {
            resolve(input);
        });
    });
}
main();
