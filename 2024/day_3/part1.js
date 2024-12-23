const path = "entry.txt";
const file = Bun.file(path);

const text = await file.text()

const regex = /mul\((\d{1,3}),(\d{1,3})\)/gm;

const results = [...text.matchAll(regex)]

let value = 0
results.forEach(element => {
  value += parseInt(element[1])*parseInt(element[2])
})
console.log(value)