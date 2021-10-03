//task # 3 - check if a character is a vowel

let char = 'a'

isCharacterAVowel = () => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return `'${char}' is a vowel.`
    }
    else {
        return `'${char}' is a consonant.`
    }
}


if (char.length === 1 && typeof char === 'string') {
    console.log(isCharacterAVowel())
}
else if (char.length > 1) {
    console.log('you entered too many characters')
}
else if (typeof char == 'number') {
    console.log('you entered a number')
}
else {
    console.log('invalid entry')
}
