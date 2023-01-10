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
  const stringArr = string.toLowerCase().split("");
  return shift(stringArr, number);
};

const shift = (array, number) => {
  if (number > 26) number = number % 26;
  let result = [];
  let reg = /[^a-zA-Z\s]|\s/;
  array.forEach((letter) => {
    if (reg.test(letter)) result.push(letter);
    else {
      let index = alphabet.indexOf(letter);
      if (index + number < 0) result.push(alphabet[(26 % number) + index]);
      result.push(alphabet[index + number]);
    }
  });
  return result.join("");
};

// console.log(
//   caesarCipher(
//     "It's my first time writing tests with jest, pretty exciting stuff 404!!!",
//     5
//   )
// );

console.log(caesarCipher("hello", -26));

module.exports = caesarCipher;
