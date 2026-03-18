const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line) => {
        return line.split('')
    });


const numberOfLines = lines.length;
const indexOfLastLine = numberOfLines - 1;

const dynamicProgramming = Array.from({ length: numberOfLines }, (element, i) => 
    new BigInt64Array(lines[i] ? lines[i].length : 0)    
);

// find the S on the first line
const firstLine = lines[0];
const indexOfS = firstLine.indexOf('S');

dynamicProgramming[0][indexOfS] = 1n;

for (let i = 0; i < lines.length - 1; i++) {
    for (let j = 0; j < lines[i].length; j++) {

        const currentValue = dynamicProgramming[i][j];
        const currentChar = lines[i][j];

        if(currentValue === 0n) {
            continue;
        }

        if (currentChar === '^') {
            dynamicProgramming[i + 1][j - 1] += currentValue;
            dynamicProgramming[i + 1][j + 1] += currentValue;
        } else {
            dynamicProgramming[i + 1][j] += currentValue;
        }
    }
}

const totalFinal = dynamicProgramming[numberOfLines - 1].reduce((acc, val) => acc + val, 0n);


console.log(totalFinal.toString());