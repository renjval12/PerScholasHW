//task # 1 - max of two numbers

let num1 = 3
let num2 = 5

maxOfTwoNumbers = () => num1 > num2 ? num1 : num2
console.log(maxOfTwoNumbers())


//


/* //task # 2 - max of three numbers

let prompt = require('prompt-sync')()

let num1 = prompt('Enter a number: ')
let num2 = prompt('Enter a second number: ')
let num3 = prompt('Enter a third number: ')

let threeNums = []
threeNums.push(num1, num2, num3)

highestNum = () => {
    let highNum = 0
    let highestNum = 0

    for (let i = 0; i < threeNums.length; i++) {
        if (threeNums[i] > highNum) {
            highNum = threeNums[i]
            highestNum = threeNums[i]
        }
    }
    return `The highest number of your three numbers (${threeNums.join(" ")}) is: ${highestNum}`
}

console.log(highestNum()) */