const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.repeatTimes = 1
  options.separator = "+"
  options.addition = options.addition  + ''
  options.additionRepeatTimes = 1
  options.additionSeparator = "|"

  str = str + '';
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arr1.push(options.addition);
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    arr2.push(str + arr1.join(options.additionSeparator));
  }

  return arr2.join(options.separator);
}

module.exports = {
  repeater
};
