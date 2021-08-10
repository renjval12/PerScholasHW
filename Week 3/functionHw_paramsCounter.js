//task # 5 - Write a function that returns the number of arguments passed to the function when called.

let prompt = require('prompt-sync')();
let string = prompt('Please type in the name of your favorite song: ').split(' ')

//solution #1 = use of arguments object
function paramCounter() {
    return arguments.length
}

//solution #2 = use of .length method
// paramCounter = (...string) => string.length

//not entirely sure which solution is best practice. Included both.

console.log(`There are ${paramCounter(...string)} parameters being passed through.`)