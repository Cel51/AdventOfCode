// NOT WORKING

const path = "demo2.txt";
const file = Bun.file(path);

const text = await file.text()

const splittedText = text.split('\r\n')

let count = 0
let unsafe = []

splittedText.forEach(element => {

  const levels = element.split(' ')
  console.log(levels)
  
  let previousDifference = 'init'
  let difference = 0
  let absDifference = 0

  for (let i = 0; i < levels.length; i++) {
    let currentNumber = parseInt(levels[i])
    let nextNumber = parseInt(levels[i+1])

    if(isNaN(nextNumber)) {
      count++
      break;
    }

    difference = currentNumber - nextNumber;
    absDifference = Math.abs(difference)
    if(absDifference < 1 || absDifference > 3) {
      console.log('BREAK: more than 3 or less than 1')
      unsafe.push(levels)
      break;
    }

    if(previousDifference === 'init') {
      previousDifference = difference
    }

    if(previousDifference < 0) {
      if(difference > 0) {
        console.log('BREAK: change direction')
        unsafe.push(levels)
        break;
      }
    } else if (previousDifference > 0) {
      if(difference < 0) {
        console.log('BREAK: change direction')
        unsafe.push(levels)
        break;
      }
    }
    previousDifference = difference
  }
});
console.log(unsafe)

unsafe.forEach(element => {

  const levels = element
  console.log(levels)
  
  let previousDifference = 'init'
  let difference = 0
  let absDifference = 0

  for (let i = 0; i < levels.length; i++) {
    let currentNumber = parseInt(levels[i])
    let nextNumber = parseInt(levels[i+2])

    if(isNaN(nextNumber)) {
      count++
      break;
    }

    difference = currentNumber - nextNumber;
    absDifference = Math.abs(difference)
    if(absDifference < 1 || absDifference > 3) {
      console.log('BREAK: more than 3 or less than 1')
      unsafe.push(levels)
      break;
    }

    if(previousDifference === 'init') {
      previousDifference = difference
    }

    if(previousDifference < 0) {
      if(difference > 0) {
        console.log('BREAK: change direction')
        unsafe.push(levels)
        break;
      }
    } else if (previousDifference > 0) {
      if(difference < 0) {
        console.log('BREAK: change direction')
        unsafe.push(levels)
        break;
      }
    }
    previousDifference = difference
  }
});
console.log(count)