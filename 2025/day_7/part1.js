const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line) => {
        return line.split('')
    });

console.table(lines);

let splitted = 0;

for (let i = 0; i < lines.length - 1; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === 'S') {
            lines[i+1][j] = '|';
        }
        if (lines[i][j] === 'S' || lines[i][j] === '|') {            
            if (lines[i + 1][j] === '^') {
                lines[i + 1][j - 1] = '|';
                lines[i + 1][j + 1] = '|';
                splitted++;
            } else {
                lines[i + 1][j] = '|';
            }
        }
    }
}

console.table(lines);

console.log(splitted);