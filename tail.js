const assertEqual = (actual, expected) => {
  return actual === expected ?
    `✅✅Assertion Passed: ${actual} === ${expected}  ` :
    `❌❌ Assertion Failed : ${actual} != ${expected}`;
};

const tail = (arr) => {
  const newArr = [...arr];
  return newArr.splice(1);

};

