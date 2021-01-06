
const middle = (arr) => {
  let middle = [];
  if (arr.length > 2) {
    if (arr.length % 2 === 0) {
      middle.push(arr.length / 2);
      middle.push(arr.length / 2 + 1);
    } else {
      middle.push(Math.ceil(arr.length / 2));
    }
  }
  return middle;

};
