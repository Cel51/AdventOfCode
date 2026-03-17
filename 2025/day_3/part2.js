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
    sum += getMaxValue(row, 12);
});

console.log('MaxValue: ' + sum);

function getMaxValue(bankNumbers, countToKeep) {
    let bankNumbersLength = bankNumbers.length;
    let numbersToRemove = bankNumbersLength - countToKeep;
    let results = [];
    let deleteCounter = 0;

    if(numbersToRemove === 0) {
        return parseInt(bankNumbers.join(''), 10);
    }

    if(countToKeep === 0) {
        return 0;
    }

    for (let i = 0; i < bankNumbersLength; i++) {
        let actualNumber = bankNumbers[i];
        let stillInBankNumbers = bankNumbersLength - i;
        let requiredNumbersToAdd = countToKeep - results.length;

        if (stillInBankNumbers === requiredNumbersToAdd) {
            results.push(...bankNumbers.slice(i));
            break;
        }

        while (results.length > 0 && deleteCounter < numbersToRemove && results[results.length - 1] < actualNumber) {
            results.pop();
            deleteCounter++;
        }

        results.push(actualNumber);
    }

    while (deleteCounter < numbersToRemove) {
        results.pop();
        deleteCounter++;
    }

    return parseInt(results.join(''), 10);
}

