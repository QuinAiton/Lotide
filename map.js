const assertArrayEqual = require('./assertArraysEqual');

const map = (array, callback) => {
  const results = [];
  for (const word of array) {
    results.push(callback(word));
  }
  return results;
};






module.exports = map;

