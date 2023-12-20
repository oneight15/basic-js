const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!')
  }
  if (Object.getOwnPropertyNames(date).length != 0) {
    throw new Error('Invalid date!')
  }

  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];
  const winter = [0, 1, 11];
  const numOfMonth = date.getMonth();
  if (spring.includes(numOfMonth)) {
    return 'spring'
  }
  if (summer.includes(numOfMonth)) {
    return 'summer'
  }
  if (autumn.includes(numOfMonth)) {
    return 'autumn'
  }
  if (winter.includes(numOfMonth)) {
    return 'winter'
  }
  
}

module.exports = {
  getSeason
};
