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
}).sort((a, b) => a.start - b.start);

const numbers = lines[1].map(Number);

function mergeRanges(ranges) {
    if (ranges.length === 0) return [];
    
    const merged = [ranges[0]];
    
    for (let i = 1; i < ranges.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = ranges[i];
        
        if (current.start <= lastMerged.end) {
            // Overlapping ranges, merge them
            lastMerged.end = Math.max(lastMerged.end, current.end);
        }
        else {
            // Non-overlapping range, add to merged list
            merged.push(current);
        }
    }
    
    return merged;
}


const uniqueRange = mergeRanges(ranges);

let count = 0;

uniqueRange.forEach(range => {
    count += (range.end - range.start + 1);
});

console.log(`Total unique numbers in range: ${count}`);
