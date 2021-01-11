const eqArrays = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (expected.length !== actual.length) {
      return false;
    }
    if (expected[i] !== actual[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (actual, expected) => {
  const expKey = Object.keys(expected);
  const actKey = Object.keys(actual);

  if (expKey.length !== actKey.length) {
    return false;
  }

  for (const key of actKey) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      return eqArrays(actual[key], expected[key]);
    } else {
      if (actual[key] !== expected[key]) {
        return false;
      }
    }
  }
  return true;
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2)); // => false
console.log(eqObjects(cd3, cd)); // => true

module.exports = eqObjects;