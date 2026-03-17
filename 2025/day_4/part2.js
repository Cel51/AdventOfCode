const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line, idx) => {
        return line.split('').map(num => parseInt(num, 10));
    });

lines.forEach((row, idx) => {
    
});


