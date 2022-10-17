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

  let arr = n.toString().split('').map(Number)
  let num1 = +arr.slice(1).join('')
  let min = Math.min.apply(null, arr)
  let num2 = +( arr.slice(0, arr.lastIndexOf(min)) + arr.slice(arr.lastIndexOf(min) + 1) )
      .split(',')
      .join('')
  return (num2 > num1) ? num2 : num1
}

module.exports = {
  deleteDigit
};
