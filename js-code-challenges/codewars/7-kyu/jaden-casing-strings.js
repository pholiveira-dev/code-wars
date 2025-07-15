function toJadenCase (text) {
   return text
    .toLowerCase()
    .split(' ')
    .map(toCase => toCase.charAt(0).toUpperCase() + toCase.slice(1))
    .join(' ')
}

const phrase = "esta frase é um exemplo";
console.log(toJadenCase(phrase));