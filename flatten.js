const flatten = (arr) => {
  let joinArr = arr.join('').split('');
  const filtered = joinArr.filter(item => item !== ',');
  return filtered;
};
module.exports = flatten;