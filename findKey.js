const assertEqual = (actual, expected) => {
  return actual === expected ?
    `✅✅Assertion Passed: ${actual} === ${expected}  ` :
    `❌❌ Assertion Failed : ${actual} !== ${expected}`;
};

const findKeyByValue = (object, value) => {
  for (const key in object) {
    if ((object[key]) === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  bestShow: "That '70s Show"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "70s Show"), undefined);

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "bestShow");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");