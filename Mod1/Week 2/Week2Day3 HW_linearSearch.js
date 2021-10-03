const prompt = require('prompt-sync')()
var guess = prompt(`Type in a number: `)

guess = Number(guess)

var k = guess
var arr = [7, 8, 21, 8, 9, 33, 333, 33, 222, 777]
var counter = 0
var positions = []

for (var i = 0; i < arr.length; i++) {

    if (arr[i] === k) {
        console.log(`The # ${k} was found in position # ${i + 1} of the "arr" array`)
        counter++
    }
    positions.push(`number: ${arr[i]} / position: ${i + 1}`)

}

if (counter === 1) {
    console.log(`There is only ${counter} occurence of the # ${k} in the "arr" array.`)
}
else {
    console.log(`There are ${counter} occurences of the # ${k} in the "arr" array.`)
}

console.log(`Here's an list of the numbers and their positions in the "arr" array:`)

console.log(positions)

