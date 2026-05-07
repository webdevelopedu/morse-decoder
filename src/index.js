const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const step = 10;
  const result = [];
  for (let i = 0; i < expr.length; i += step) {
    const chunk = expr.substring(i, i + step);
    if (chunk === '**********') {
      result.push(' ');
    } else {
      let morse = '';
      for (let j = 0; j < step; j += 2) {
        if (chunk[j] === '1') {
          morse += chunk[j + 1] === '0' ? '.' : '-';
        }
      }
      result.push(MORSE_TABLE[morse]);
    }
  }
  return result.join('');
};
