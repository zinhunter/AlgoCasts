// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // * My solution
    return Math.sign(n) * parseInt(n.toString().split('').reduce((rev, char) => char + rev, ''))
}

module.exports = reverseInt;
