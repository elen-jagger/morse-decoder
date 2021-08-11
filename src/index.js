const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const sentence = [];
    let words = expr.split('**********');
    words.forEach((element) => {
        let arr=[];
        
        let wordsCount = element.length / 10;
        for (i = 0; i < wordsCount; i++) {
            let eachLetterNums = element.slice(i * 10, (i + 1) * 10);

            let letters = eachLetterNums.replace('00', '');
            let lettersCount = letters.length / 2;
            let result = [];
            for (j = 0; j < lettersCount; j++) {
                let letter = letters.slice(j * 2, (j + 1) * 2);
                let decodedLetter;
                switch (letter) {
                    case '10': decodedLetter = '.';  break;
                    case '11': decodedLetter = '-'; break;
                } 
                result.push(decodedLetter);
            }

            let a = result.join('');
            let eachLetter = MORSE_TABLE[a];
            arr.push(eachLetter);
        }
        
        let eachWord = arr.join('');
        sentence.push(eachWord);
    });
    return sentence.join(' '); 
}


module.exports = {
    decode
}


