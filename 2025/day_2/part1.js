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
        // number of digits in the number
        const numDigits = j.toString().length;

        // if the number is odd, skip it
        if (numDigits % 2 === 1) {
            continue;
        }
        // create a regex for 2 repeating group of digits of numdigits/2 length
        const regex = new RegExp(`^(\\d{${numDigits / 2}})\\1$`);
        if (regex.test(j.toString())) {
            console.log('Found a number with 2 repeating groups of digits: ' + j);
            sum = sum + j;
        }        
    }
}

console.log('The sum of all the numbers with 2 repeating groups of digits is: ' + sum);
