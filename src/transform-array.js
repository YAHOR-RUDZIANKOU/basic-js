const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arrCopy = arr.slice();

  let strPar = arrCopy.find((value) => typeof value === "string");

  if (!strPar) {
    console.log(arr);
    // return arr;
  }

  let index = arrCopy.indexOf(strPar);

  switch (strPar) {
    case "--discard-next":
      if (index + 1 < arrCopy.length) {
        arrCopy.splice(index, 2); 
      } else {
        arrCopy.splice(index, 1); 
      }
      return transform(arrCopy);

    case "--discard-prev":
      if (index - 1 >= 0) {
        arrCopy.splice(index - 1, 2); 
      } else {
        arrCopy.splice(index, 1); 
      }
      return transform(arrCopy);

    case "--double-next":
      if (index + 1 < arrCopy.length) {
        arrCopy[index] = arrCopy[index + 1]; 
      } else {
        arrCopy.splice(index, 1);
      }
      return transform(arrCopy);

    case "--double-prev":
      if (index - 1 >= 0) {
        arrCopy[index] = arrCopy[index - 1];
      } else {
        arrCopy.splice(index, 1); 
      }
      return transform(arrCopy);
  }

  return arr;
}

module.exports = {
  transform,
};

transform([1, 2, 3, '--discard-next', 4, '--double-prev', 5]);
