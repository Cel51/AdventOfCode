const path = "entry.txt";
const file = Bun.file(path);

const text = await file.text()

const regex = /(mul\((\d{1,3}),(\d{1,3})\)|don't\(\)|do\(\))/gm;

const results = [...text.matchAll(regex)]

let value = 0
let enable = true
for(let i = 0; i < results.length; i++) {
  let element = results[i]
  if(element[0] === "don't()") {
    enable = false
    continue;
  } 
  if (element[0] === 'do()') {
    enable = true
    continue;
  } 
  if (element[0].includes('mul') && enable) {    
    value += parseInt(element[2])*parseInt(element[3])
    continue;
  }
}
console.log(value)