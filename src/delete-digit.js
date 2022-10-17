const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const newArr = n.toString().split('').map( (item, index, arr) => {
    return arr.splice(1,1).join('')
  })

  console.log( newArr )
}

module.exports = {
  deleteDigit
};
