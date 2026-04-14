const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'entry.txt');

const lines = fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map((line) => {
        return line.split(',').map((num) => parseInt(num));
    });

const junctionBoxes = lines.map((line) => {
    return {
        name: `${line[0]},${line[1]},${line[2]}`,
        x: line[0],
        y: line[1],
        z: line[2]
    }
});
    
function straighLineDistance3D(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
}

let allDistances = [];
for (let i = 0; i < junctionBoxes.length; i++) {
    for (let j = i + 1; j < junctionBoxes.length; j++) {
        const distance = straighLineDistance3D(junctionBoxes[i], junctionBoxes[j]);
        allDistances.push({
            from: junctionBoxes[i].name,
            to: junctionBoxes[j].name,
            distance
        });
    }
}
allDistances.sort((a, b) => a.distance - b.distance).slice(0,1000);

const circuits = [];
for (let i = 0; i < junctionBoxes.length; i++) {
    circuits.push([junctionBoxes[i].name]);
}

allDistances.slice(0,1000).forEach((distance) => {
    const fromCircuitIndex = circuits.findIndex((circuit) => circuit.includes(distance.from));
    const toCircuitIndex = circuits.findIndex((circuit) => circuit.includes(distance.to));

    const fromCircuit = circuits[fromCircuitIndex];
    const toCircuit = circuits[toCircuitIndex];

    // merge the two circuits if they are not the same and remove the one that is merged
    if (fromCircuitIndex !== toCircuitIndex) {
        const mergedCircuit = [...new Set([...fromCircuit, ...toCircuit])];
        circuits[fromCircuitIndex] = mergedCircuit;
        circuits.splice(toCircuitIndex, 1);
    }


});

// sort the circuits by length
circuits.sort((a, b) => b.length - a.length);
const multiply = circuits.slice(0,3).reduce((acc, circuit) => acc * circuit.length, 1);

console.log(multiply);