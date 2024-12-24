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

const checkMasCross = (r, c) => {
    if(a[r][c]!= "A") {return}

    if(!isDiagonal(r-1, c-1, r+1, c+1)) {return}
    if(!isDiagonal(r-1, c+1, r+1, c-1)) {return}

    count++
}

const isDiagonal = (r1,c1,r2,c2) => {
    const a = symbolAt(r1,c1)
    const b = symbolAt(r2,c2)

    if(a == "M" && b == "S") {return true}
    if(a == "S" && b == "M") {return true}

    return false
}

const symbolAt = (r, c) => {
    if(r < 0) {return ""}
    if(c < 0) {return ""}

    if(r >= h) {return ""}
    if(c >= w) {return ""}

    return a[r][c]
}

for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
        checkMasCross(r, c)   
    }
}
console.log(count)