const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let total = 0;
  
  matrix.forEach(item => {
    let res = 0;
    item.forEach(elem => {
      if (elem === '^^') {
        res += 1;
      }
    });
    total += res;
  });

  return total;
}

module.exports = {
  countCats
};
