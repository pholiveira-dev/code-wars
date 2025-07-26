// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
    if(!string) return false;

    if(string.length === 0) return false;

    for (let char of string) {
        if(!char.match(/[a-zA-Z0-9]/)) {
            return false;
        }
    }

    return true

}

console.log(alphanumeric("2@4"))