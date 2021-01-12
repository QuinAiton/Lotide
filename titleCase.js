const titleCase = (string) => {
  let stringArr = string.toLowerCase().split(' ');
  stringArr.forEach((element, i) => {
    stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
  });
  return stringArr.join(' ');
};
