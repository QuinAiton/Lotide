
const tail = (arr) => {
  const newArr = [...arr].splice(1);
  return newArr

};

module.exports = tail;