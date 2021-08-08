//task # 7 - finds the longest word in a sentence

let prompt = require('prompt-sync')()
var string = prompt('Please enter a line from your favorite song: ').split(" ")

var longestWordLength = 0
var longestWord = ""

let findLongestWord = () => {
    for (var i = 0; i < string.length; i++) {
        if (string[i].length > longestWordLength) {
            longestWordLength = string[i].length
            longestWord = string[i]
        }
    }
    string = string.join(" ")
    return `The longest word in '${string}' is ${longestWord} and is ${longestWord.length} letters long`;
}
console.log(findLongestWord())


/* // task # 8 - finds all of the words in a sentence of a specific length, and prints it/them

let prompt = require('prompt-sync')()

var string = prompt('Please enter a line from your favorite song: ').split(" ")
var i = Number(prompt('Please enter a length amount: '))
var longestWords = []

let filterLongWords = (i) => {
    for (var j = 0; j < string.length; j++) {
        if (string[j].length === i) {
            longestWords.push(string[j])
        }
    }
    string = string.join(" ")
    longestWords = longestWords.join(' ')
    return `All of the words in '${string}', that are ${i} letters long: '${longestWords}' `
}
console.log(filterLongWords(i)) */

// if (when i sort through each character in a word, one of the characters is between num33(>33) and num64 (<64) ) variable = string[i].replace(the character symbol, "") || else 