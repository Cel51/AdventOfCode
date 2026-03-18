const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line, idx) => {
        return line.split('').reverse();
    });


console.table(lines);

let lengthCol = lines[0].length;
let lengthRow = lines.length;

const operator = [];
const groupNumber = [];

for (let j = 0; j < lengthCol; j++) {
    const number = [];
    for (let i = 0; i < lengthRow - 1; i++) {
        if(parseInt(lines[i][j])) {
            number.push(lines[i][j]);
        }
    }
    if(lines[lengthRow - 1][j] !== ' ') {
        operator.push(lines[lengthRow - 1][j]);
    }
    groupNumber.push(parseInt(number.join("")));
}

// iterate on the groupNumber, if the value is NaN, if there no array, add an array inside the array until the next NaN
const result = [];
let currentGroup = [];
for (let i = 0; i < groupNumber.length; i++) {
    if (isNaN(groupNumber[i])) {
        if (currentGroup.length > 0) {
            result.push(currentGroup);
            currentGroup = [];
        }
    }
    else {
        currentGroup.push(groupNumber[i]);
    }
}
if (currentGroup.length > 0) {
    result.push(currentGroup);
}

// at the end of the result, we have an array of arrays, we need to iterate on the result and apply the operator to the group of numbers
let finalResult = 0;
for (let i = 0; i < result.length; i++) {
    let groupResult = result[i][0];
    for (let j = 1; j < result[i].length; j++) {
        if (operator[i] === '+') {
            groupResult += result[i][j];
        }
        else if (operator[i] === '*') {
            groupResult *= result[i][j];
        }
    }
    finalResult += groupResult;
}

console.log(finalResult);