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

group1.sort((a, b) => a-b)
group2.sort((a, b) => a-b)
console.log(group1)

let total = 0

group1.forEach((element, index) => {
    console.log('group1', group1[index])
    console.log('group2', group2[index])
    console.log('diff', Math.abs(group1[index] - group2[index]))
    total += Math.abs(group1[index] - group2[index])
})

console.log(total)