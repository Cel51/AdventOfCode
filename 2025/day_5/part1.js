const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n\n')
    .map((line, idx) => {
        return line.split('\n');
    });

const ranges = lines[0].map(line => {
    const [start, end] = line.split('-').map(Number);
    return { start, end };
});

const numbers = lines[1].map(Number);
    
let numberInRangeCount = 0;

numbers.forEach(num => {
    const inRange = ranges.some(range => num >= range.start && num <= range.end);
    if (inRange) {
        numberInRangeCount++;
    }
});

console.log(`Total numbers in range: ${numberInRangeCount}`);