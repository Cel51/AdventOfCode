const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const stack = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line, idx) => {
        return line.split('').map(num => parseInt(num, 10));
    });


let sum = 0;

stack.forEach((row, idx) => {
    // found the max value in the row
    const rowCopy = [...row].splice(0, row.length - 1);
    const maxFirst = Math.max(...rowCopy);
    const indexOfMaxFirst = [...row].splice(0, rowCopy.length).indexOf(maxFirst);
    const rowCopy2 = [...row].splice(indexOfMaxFirst + 1);
    const maxSecond = Math.max(...rowCopy2);

    // conctat the 2 values and add to the sum
    const num = parseInt(maxFirst.toString() + maxSecond.toString(), 10);
    console.log('MaxValue: ' + num);

    sum = sum + num;
});

console.log('MaxValue: ' + sum);