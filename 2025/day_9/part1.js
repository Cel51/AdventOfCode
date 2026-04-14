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

function calculateArea(corner1, corner2) {
    const width = Math.abs(corner1.x - corner2.x) + 1;
    const height = Math.abs(corner1.y - corner2.y) + 1;
    return width * height;
}

const twoCornersAreas = [];

for (let i = 0; i < redTiles.length; i++) {
    for (let j = i + 1; j < redTiles.length; j++) {
        const tile1 = redTiles[i];
        const tile2 = redTiles[j];
        const area = calculateArea(tile1, tile2);
        twoCornersAreas.push({
            tile1,
            tile2,
            area: area,
        });
    }
}

twoCornersAreas.sort((a, b) => b.area - a.area);

console.log(twoCornersAreas[0]);