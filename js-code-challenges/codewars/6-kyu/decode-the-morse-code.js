// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

function decodeMorse (morseCode) {
// 1. Tirar espaços extras

const MORSE_CODE = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  // Pode adicionar pontuação e sinais especiais se quiser
};

    const morse = morseCode.trim();

// 2. Separar em palavras pelo 3 espaços

    const words = morse.split('   ')

// 3. Criar um array para as palavras decodificadas - map?

    const decodedWords = words.map(words => {
        // 4. Separar palavra em letras pelo espaço
        const letters = words.split(' ');

        // 5. Traduzir cada letra de Morse para letra normal
        const decodedLetters = letters.map(letter => MORSE_CODE[letter]);

         // 6. Juntar letras para formar palavra
        return decodedLetters.join('')
    })
 // 7. Juntar palavras com espaço para formar frase

    return decodedWords.join(' ')
}



function decodeMorse (morseCode) {
    const morse= morseCode.trim();

    const words = morse.split('  ');

    const DecodedWords = words.map(word => {
        const letters = word.split('');

        const decodedLetters = letters.map(letter => MORSE_CODE[letter]);

        return decodedLetters.join('');
    })
    return DecodedWords.join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));