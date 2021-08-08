//task # 6 - create function that reverses a string

var prompt = require('prompt-sync')()
var string = prompt('Please enter a word: ')

reverseString = () => stringReverse = string.split('').reverse().join("")

console.log(`the reverse of ${string} is ${reverseString()}`)