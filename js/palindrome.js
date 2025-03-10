function palindrome(word) {
    let cleanWord = word.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let first_half = '';
    let second_half = '';

    if (word.length % 2 !== 0) {
        first_half = cleanWord.slice(0, Math.floor(cleanWord.length / 2))
        second_half = cleanWord.slice(Math.ceil(cleanWord.length / 2)).split('').reverse().join('')
    } else {
        first_half = cleanWord.slice(0, cleanWord.length / 2)
        second_half = cleanWord.slice((cleanWord.length + 1) / 2).split('').reverse().join('')        
    }   
    return first_half === second_half ? true : false
};

module.exports = {palindrome};