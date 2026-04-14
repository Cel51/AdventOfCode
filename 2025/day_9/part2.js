const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const redTiles = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line) => {
        const positions = line.split(',').map((num) => parseInt(num));
        return {
            x: positions[0],
            y: positions[1],
        };
    });