const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line, idx) => {
        return line;
    });

let index = 50;
let password = 0;

const regex = /(L|R)(\d+)/gi;

lines.forEach(line => {
    let match = regex.exec(line);
    let direction = '';
    let steps = 0;
    while (match) {
        direction = match[1];
        steps = parseInt(match[2], 10);
        match = regex.exec(line);
    }

    for (let i = 0; i < steps; i++) {
        if(direction === 'L') {
            index = (index - 1 + 100) % 100;
        } else if(direction === 'R') {
            index = (index + 1) % 100;
        }

        if(index === 0) {
            password++;
        }
    }
    console.log(`Turn ${direction} ${steps} steps. Now pointing at ${index}. Current password: ${password}`);
});
console.log(`Final password: ${password}`);