

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return 'Sorry, no object with that key exists';
};


module.exports = findKey;