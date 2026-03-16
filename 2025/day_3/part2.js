const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split(',')
    .map((line, idx) => {
        return line.split('-').map(num => parseInt(num, 10));
    });

let sum = 0;

for (let i = 0; i < lines.length; i++) {
    const [start, end] = lines[i];
    for (let j = start; j <= end; j++) {
        // create a regex for all repeating groups of digits of length 1 to numdigits/2
        const numDigits = j.toString().length;
        for (let groupLength = 1; groupLength <= numDigits / 2; groupLength++) {
            const regex = new RegExp(`^(\\d{${groupLength}})\\1+$`);
            if (regex.test(j.toString())) {
                console.log('Found a number with repeating groups of digits: ' + j);
                sum = sum + j;
                break; // break out of the loop once we find a match
            }
        }
    }
}

console.log('The sum of all the numbers with 2 repeating groups of digits is: ' + sum);
