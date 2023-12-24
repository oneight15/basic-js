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
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const arrForSearch = s2.split('');

  for (let i = 0; i < s1.length; i += 1) {
    if (arrForSearch.includes(s1[i])) {
      res += 1;
      let key = arrForSearch.indexOf(s1[i])
      delete arrForSearch[key]
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
