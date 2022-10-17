const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {

  let obj = {}
  let count = 0

  s1.split('').forEach( item => {
    obj[item] = !obj[item] ? 1 : obj[item] + 1
  })

  s2.split('').forEach( item => {
    if ( obj[item] > 0 ) {
      count++
      obj[item]--
    }
  })

  return count
}


module.exports = {
  getCommonCharacterCount
};
