const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const caesarCipher = (string, number) => {
  const stringArr = string.split("");
  return shift(stringArr, number);
};

const shift = (array, number) => {
  console.log(array);
  if (number > 26) number = number % 26;
  let i = 0;
  let result = [];
  let toUpper = [];
  let reg = /[^a-zA-Z\s]|\s/;
  array.forEach((letter) => {
    if (reg.test(letter)) result.push(letter);
    else {
      if (/[A-Z]/.test(letter)) toUpper.push(i);
      let index = alphabet.indexOf(letter.toLowerCase());
      if (index + number > 25) index = index - 26;
      if (index + number < 0) result.push(alphabet[(26 % number) + index]);
      result.push(alphabet[index + number]);
    }
    i++;
  });

  toUpper.forEach((element) => {
    result[element] = result[element].toUpperCase();
  });
  return result.join("");
};

module.exports = caesarCipher;
