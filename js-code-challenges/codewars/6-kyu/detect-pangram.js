function isPangram(string) {
    const stringLowerCase = string.toLowerCase();
    const strings = new Set();
    
    for(const s of stringLowerCase) {
        if(/[a-z]/.test(s)) {
            strings.add(s);
        }
    }

    return strings.size === 26;
}

console.log(isPangram('This is not a pangram.'));