const assertEqual = (actual, expected) => {
  return actual === expected ?
    `✅✅Assertion Passed: ${actual} === ${expected}  ` :
    `❌❌ Assertion Failed : ${actual} != ${expected}`;
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('light', 'light');
assertEqual(1, 4);


const head = (arr) => {
  return arr[0];
}

