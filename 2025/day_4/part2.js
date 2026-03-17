const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line, idx) => {
        return line.split('');
    });


let rolls = 0;
let actualRolls = 0;
let round = 0;

let linesCopy = JSON.parse(JSON.stringify(lines));

do {
    test = recursiveCheck(linesCopy);
    linesCopy = test[0];
    console.log(test[1]);
    actualRolls = test[1];
    rolls += actualRolls;
    round++;
} while( actualRolls > 0);

console.log(`Total rolls: ${rolls}`);

function recursiveCheck(lines) {
    let linesCopy = JSON.parse(JSON.stringify(lines));

    const linesLength = lines.length - 1;
    const rowLength = lines[0].length - 1;
    let rolls = 0;

    for (let i = 0; i < lines.length; i++) {
        const currentLine = lines[i];

        for (let j = 0; j < currentLine.length; j++) {
            const currentNum = currentLine[j];

            if(currentNum == '@') {
                linesCopy[i][j] = checkSpace(lines, i, j, linesLength, rowLength) ? 'X' : '@';
                if(linesCopy[i][j] == 'X') {
                    rolls++;
                    linesCopy[i][j] = '.';
                }
            }
        }
    }
    return [linesCopy, rolls];
}


function checkSpace(lines,i, j, linesLength, rowLength) {
    let indexLine = i;
    let indexRow = j;

    let hasTopLine = indexLine - 1 >= 0;
    let hasBottomLine = indexLine  < linesLength;
    let hasLeftRow = indexRow - 1 >= 0;
    let hasRightRow = indexRow < rowLength;

    let spaces = 0;

    let upLeft = hasTopLine && hasLeftRow ? lines[indexLine - 1][indexRow - 1] : '.';
    let up = hasTopLine ? lines[indexLine - 1][indexRow] : '.';
    let upRight = hasTopLine && hasRightRow ? lines[indexLine - 1][indexRow + 1] : '.';
    let left = hasLeftRow ? lines[indexLine][indexRow - 1] : '.';
    let right = hasRightRow ? lines[indexLine][indexRow + 1] : '.';
    let downLeft = hasBottomLine && hasLeftRow ? lines[indexLine + 1][indexRow - 1] : '.';
    let down = hasBottomLine ? lines[indexLine + 1][indexRow] : '.';
    let downRight = hasBottomLine && hasRightRow ? lines[indexLine + 1][indexRow + 1] : '.';

    if(upRight == '.') spaces++;
    if(up == '.') spaces++;
    if(upLeft == '.') spaces++;
    if(left == '.') spaces++;
    if(right == '.') spaces++;
    if(downRight == '.') spaces++;
    if(down == '.') spaces++;
    if(downLeft == '.') spaces++;

    /* console.log('------------------');
    console.log(`Checking ${i}, ${j} \n ${upLeft} ${up} ${upRight} \n ${left} ${lines[indexLine][indexRow]} ${right} \n ${downLeft} ${down} ${downRight}`);
    console.log(`Spaces: ${spaces}`);
    console.log(`-------------------`); */

    return spaces > 4;
}
    