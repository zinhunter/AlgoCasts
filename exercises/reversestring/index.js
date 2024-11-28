// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // * My solution
    // let reversed = "";
    // for (let index = str.length; index > 0; index--) {
    //     reversed = reversed + str[index - 1];
    // }
    // return reversed;
    
    // * Solution 1
    //return str.split('').reverse().join('');

    // * Solution 2
    // let reversed = "";
    // for (let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    // * Solution 3
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
