const path = "entry.txt";
const file = Bun.file(path);

const text = await file.text()

const splittedText = text.split('\r\n')

const group1 = []
const group2 = []

splittedText.forEach(element => {
    const group = element.split('   ')
    group1.push(parseInt(group[0]))
    group2.push(parseInt(group[1]))
});


let total = 0

const occurrences = group2.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

console.log(occurrences)

group1.forEach((element, index) => {
  console.log('group1', element)
  console.log('occurences', occurrences[element])
    total += element*(occurrences[element] ?? 0)
})

console.log(total)