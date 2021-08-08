//task # 3 - check if a character is a vowel

let char = 'z'

isCharacterAVowel = () => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ? `'${char}' is a vowel.` : `'${char}' is a consonant.`

console.log(isCharacterAVowel())