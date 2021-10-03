//task # 4a - function that finds the sum of an array

let prompt = require('prompt-sync')()
let arr = prompt('Enter a list of numbers, divided by a space: ').split(' ')
let sumOfArray = 0;
console.log(arr)

sumArray = () => {
    for (var i = 0; i < arr.length; i++) {
        sumOfArray += Number(arr[i])
    }
    return sumOfArray
}
console.log(sumArray())

/* //task # 4b - function that multiplies the values in an array

let prompt = require('prompt-sync')()
let arr = prompt('Enter a list of numbers, divided by a space: ').split(' ')
let multiplesOfArray = 1;
console.log(arr)

multiplyArray = () => {
    for (var i = 0; i < arr.length; i++) {
        multiplesOfArray *= Number(arr[i])
    }
    return multiplesOfArray
}
console.log(multiplyArray())*/