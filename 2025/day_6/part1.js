const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line, idx) => {
        return line.replaceAll(/\s+/gi, ' ').replaceAll(/\s$/gi, '').replaceAll(/^\s/gi, '').split(' ');
    });


const invertedArray = [];

lengthX = lines[0].length;
lengthY = lines.length;

for (let i = 0; i < lengthX; i++) {
    invertedArray.push([]);
    for (let j = 0; j < lengthY; j++) {
        invertedArray[i].push(lines[j][i]);
    }
}

const result = invertedArray.map((line) => {
    const operator = line.pop();
    const numbers = line.map((num) => parseInt(num));
    switch (operator) {
        case '+':
            return numbers.reduce((a, b) => a + b, 0);
        case '*':
            return numbers.reduce((a, b) => a * b, 1);
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
});

const sumOfAllResults = result.reduce((a, b) => a + b, 0);

console.log(sumOfAllResults);