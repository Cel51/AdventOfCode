const path = "entry.txt";
const file = Bun.file(path);

const text = await file.text()

const row = text.split('\r\n')
const a = [...row.map(element => {
  return element.split('')
})]

const h = a.length 
const w = a[0].length
let count = 0

const gotMatch = (r, c, s) => {

    if (r < 0) { return false }
    if (c < 0) { return false }

    if (r >= h) { return false }
    if (c >= w)  { return false }

    return a[r][c] == s
}


const checkToEast = (r, c) => {
    if (! gotMatch(r, c + 1,  "M")) { return }
    if (! gotMatch(r, c + 2,  "A")) { return }
    if (! gotMatch(r, c + 3,  "S")) { return }
    count++
}

const checkToWest = (r, c) => {
    if (! gotMatch(r, c - 1,  "M")) { return }
    if (! gotMatch(r, c - 2,  "A")) { return }
    if (! gotMatch(r, c - 3,  "S")) { return }
    count++
}

const checkToNorth = (r, c) => {
    if (! gotMatch(r - 1, c,  "M")) { return }
    if (! gotMatch(r - 2, c,  "A")) { return }
    if (! gotMatch(r - 3, c,  "S")) { return }
    count++
}

const checkToSouth = (r, c) => {
    if (! gotMatch(r + 1, c,  "M")) { return }
    if (! gotMatch(r + 2, c,  "A")) { return }
    if (! gotMatch(r + 3, c,  "S")) { return }
    count++
}

const checkToNorthEast = (r, c) => {
    if (! gotMatch(r - 1, c + 1,  "M")) { return }
    if (! gotMatch(r - 2, c + 2,  "A")) { return }
    if (! gotMatch(r - 3, c + 3,  "S")) { return }
    count++
}

const checkToNorthWest = (r, c) => {
    if (! gotMatch(r - 1, c - 1,  "M")) { return }
    if (! gotMatch(r - 2, c - 2,  "A")) { return }
    if (! gotMatch(r - 3, c - 3,  "S")) { return }
    count++
}

const checkToSouthEast = (r, c) => {
    if (! gotMatch(r + 1, c + 1,  "M")) { return }
    if (! gotMatch(r + 2, c + 2,  "A")) { return }
    if (! gotMatch(r + 3, c + 3,  "S")) { return }
    count++
}

const checkToSouthWest = (r, c) => {
    if (! gotMatch(r + 1, c - 1,  "M")) { return }
    if (! gotMatch(r + 2, c - 2,  "A")) { return }
    if (! gotMatch(r + 3, c - 3,  "S")) { return }
    count++
}

const checkXmasAt = (r, c) => {
    if(a[r][c]!= "X") {return}
    checkToEast(r, c)
    checkToWest(r, c)
    checkToNorth(r, c)
    checkToSouth(r, c)
    checkToNorthEast(r, c)
    checkToNorthWest(r, c)
    checkToSouthEast(r, c)
    checkToSouthWest(r, c)
}

for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
        checkXmasAt(r, c)   
    }
}
console.log(count)