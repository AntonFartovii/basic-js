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
function repeater(str, options ) {
  let res = []
  let { repeatTimes, separator, additionSeparator,
         addition, additionRepeatTimes } = options
  repeatTimes = repeatTimes ? repeatTimes : 1
  separator = separator ? separator : '+'
  additionSeparator = additionSeparator ? additionSeparator : '|'

  if ( addition === null )  addition = 'null'
  if ( additionRepeatTimes ) {
    let additions = []
    for (let i = 0; i < additionRepeatTimes; i++) {
      i < additionRepeatTimes - 1 ? additions.push(addition + additionSeparator) : additions.push(addition)
    }
    addition = additions.join('')
  }

  str = addition ? str + addition : str

  for (let i = 0; i < repeatTimes; i++) {
    res.push( repeatTimes - 1 > i ? str + separator: str )
  }
  return res.join('')
}

module.exports = {
  repeater
};
