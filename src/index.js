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

function decode(expr) {
    // сначала разбиваем строку на отдельные слова
    const words = expr.split(/\*{10}/);
    let lettersArr = [];
    // далее разбиваю слово на отдельные символы
    for (const word of words) {
        let letters = ''; // для хранения одного символа           
        let wordEng = '';
        for (let i = 0; i < word.length; i = i + 10) {
            letters = (word.substring(i, i + 10));
            // далее избавляюсь от лишних нулей спереди
            letters = letters.substring(letters.indexOf('1'));
            // далее преобразовываю символы в код Морзе
            letters = letters.replace(/10/g, '.');
            letters = letters.replace(/11/g, '-');
            // далее сопоставляю код Морзе с его буквенным значением и сохраняю
            wordEng += MORSE_TABLE[letters];
        }
        // добавляю код в формате Морзе в массив            
        lettersArr.push(wordEng);
    }
    // формирую строку и возвращаю результат
    return (lettersArr.join(' '));
}

module.exports = {
    decode
}