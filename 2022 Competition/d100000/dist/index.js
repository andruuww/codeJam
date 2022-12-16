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
    let input = (await readInput()).map(function (x) {
        return quicksort(x);
    });
    for (let c = 0; c < input.length; c++) {
        process.stdout.write(`Case #${c + 1}: `);
        for (let i = 0; i < input[c].length; i++) {
            process.stdout.write(`${input[c][i]} `);
        }
        console.log();
    }
}
function readInput() {
    return new Promise((resolve) => {
        let i = 0;
        let input = [];
        rl.on('line', (line) => {
            if (i !== 0 && i % 2 === 0) {
                input.push([0, ...line.split(' ').map((x) => {
                        return Number(x);
                    })]);
            }
            i++;
        });
        rl.on('close', () => {
            resolve(input);
        });
    });
}
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];
    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
}
;
function quicksortOpenAI(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[0];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
}
main();
