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
  if (number > 26) number = number % 26;
  let result = [];
  let toUpper = [];
  let reg = /[^a-zA-Z\s]|\s/;
  array.forEach((letter) => {
    if (reg.test(letter)) result.push(letter);
    else {
      if (/[A-Z]/.test(letter)) toUpper.push(array.indexOf(letter));
      //   console.log(array);
      //   console.log(array.indexOf(letter));
      let index = alphabet.indexOf(letter);
      if (index + number < 0) result.push(alphabet[(26 % number) + index]);
      result.push(alphabet[index + number]);
    }
  });
  let final;
  //   console.log(toUpper);
  //   result = result.join("");
  toUpper.forEach((element) => {
    console.log(element);

    final = result.splice(element, 1, result[element].toUpperCase());
    // final = result.slice(0, element) + result.slice(element);
    // console.log(result.slice(element));
    // console.log(result.slice(0, element));
  });
  return console.log(final);
};

// console.log(
//   caesarCipher(
//     "It's my first time writing tests with jest, pretty exciting stuff 404!!!",
//     5
//   )
// );

console.log(caesarCipher("Hello", 5));

// module.exports = caesarCipher;
