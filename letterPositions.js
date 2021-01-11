const letterPositions = (sentence) => {
  let result = {};
  const split = sentence.split('');
  for (let i = 0; i < split.length; i++) {
    if (result[split[i]]) {
      result[split[i]].push(i);
    } else {
      result[split[i]] = [i];
    }
  }
  return (result);
};

console.log(letterPositions("hello there sailer"));

module.exports = letterPositions;