const path = "demo.txt";
const file = Bun.file(path);

const text = await file.text()

const row = text.split('\r\n')
const a = [...row.map(element => {
  return element.split('')
})]

let numRows, numCols;

numRows = a.length
numCols = a[0].length

// Define arrays for 
// searching in all 8 directions
let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
let dy = [-1, 0, 1, -1, 1, -1, 0, 1];

// This function searches for a word in all
// 8 directions from a 
// starting point (r, c) in the grid
function searchWord(grid, r, c, word) {
    // If the first character of the word
    // doesn't match with the 
    // starting point in the grid
    if (grid[r] !== word[0])
        return false;

    let wordLength = word.length;
    let directionIndex = 0;

    // Search for the word in all 8 directions
    // starting from (r, c)
    while (directionIndex < 8) {
        // Initialize the starting point
        // for the current direction
        let k, currentRow = r + dx[directionIndex];
        let currentCol = c + dy[directionIndex];

        // The first character is already 
        // checked, match the remaining characters
        for (k = 1; k < wordLength; k++) {
            // If out of bounds, break
            if (currentRow >= numRows || currentRow < 0 ||
                currentCol >= numCols || currentCol < 0)
                break;

            // If not matched, break
            if (grid[currentRow][currentCol] !== word[k])
                break;

            // Move in a particular direction
            currentRow += dx[directionIndex];
            currentCol += dy[directionIndex];
        }

        // If all characters matched, the value of k must
        // be equal to the length of the word
        if (k === wordLength)
            return true;

        directionIndex++;
    }

    return false;
}

// Search for the given word in a given
// matrix in all 8 directions
function findPattern(grid, targetWord) {
    // Consider every point as a 
    // starting point and search for the given word
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            if (searchWord(grid, r, c, targetWord))
                console.log("Pattern found at " + r + ", " + c);
        }
    }
}
console.log(findPattern(a, 'XMAS'))