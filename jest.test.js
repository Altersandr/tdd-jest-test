const capitalize = require("./src/capitalize");
const calculator = require("./src/calculator");
const reverse = require("./src/reverseString");
const analyze = require("./src/analyzeArray");

const cipher = require("./src/caesarCipher");

test("returns a string with a capital letter", () => {
  expect(capitalize("project")).toBe("Project");
});

test("if a number gets passed in returns null", () => {
  expect(capitalize(10)).toBe(null);
});

test("adds two positive numbers", () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test("adds two negative numbers", () => {
  expect(calculator.add(-10, -1)).toBe(-11);
});

test("subtracts one number from the other", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("divides one number by other", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("reverses a string", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("reverses a string made off more than 1 word", () => {
  expect(reverse("the odin project")).toBe("tcejorp nido eht");
});

test("takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("shifts the text by the given amount encrypting it", () => {
  expect(cipher("Hello", 5)).toBe("mjqqt");
});

test("makes sure it shifts correctly even if the number is higher than the alphabet size", () => {
  expect(cipher("hello", 30)).toBe("lipps");
});

test("if a negative value (no lower than -26, otherwise breaks) is provided it still shifts", () => {
  expect(cipher("hello", -26)).toBe("hello");
});

test("if the string contains whitespace, numbers or symbols it doens't break", () => {
  expect(
    cipher(
      "It's my first time writing tests with jest, pretty exciting stuff 404!!!",
      5
    )
  ).toBe("ny'x r knwxy ynrj wnynsl yjxyx nym ojxy, uwjyy jhnynsl xyzkk 404!!!");
});
