const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    arr.forEach((value) => {
      if (Array.isArray(value)) {
        let maxDepthRec = this.calculateDepth(value)+1;
        if (maxDepthRec > maxDepth) {
          maxDepth = maxDepthRec;
        }
      }
    });
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
