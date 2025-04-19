const { NotImplementedError } = require("../extensions/index.js");

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
  if (typeof str !== "string") {
    str = String(str);
  }

  for (let key in options) {
    if (key === "addition") {
      for (let key in options) {
        if (key === "addition") {
          if (typeof options[key] !== "string") {
            options[key] = String(options[key]);
          }
        }
      }
    }
  }

  if (!options.separator) {
    options.separator = "+";
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  let side = "";
  let arr = [];
  let result;
  if (options.addition) {
    let arr = [];
    if (!options.additionRepeatTimes) {
      options.additionRepeatTimes = 1;
    }
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arr.push(options.addition);
    }
    side = arr.join(`${options.additionSeparator}`);
    // console.log(side);
  }

  let newStr = str + side;
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(newStr);
    }
    result = arr.join(`${options.separator}`);
  } else {
    result = newStr;
  }

  console.log(result);
  return result;
}

module.exports = {
  repeater,
};
