// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {

    const lowerCase = str.toLowerCase();
    
    const letters = lowerCase.split('');

    let vowel = 0

    for(c of letters) {
        // console.log(c)

        if (c === 'a') {
            vowel ++;
        }

        else if (c === 'e') {
            vowel ++;
        }

        else if (c === 'i') {
            vowel ++;
        }

        else if (c === 'o') {
            vowel ++;
        }

        else if (c === 'u') {
            vowel ++;
        }
}
    
    return `O nome ${lowerCase} tem ${vowel} vogais`;
};

console.log(getCount('abracadabra'));