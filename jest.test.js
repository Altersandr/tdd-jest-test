const capitalize = require("./src/capitalize");
const calculator = require("./src/calculator");
const reverse = require("./src/reverseString");

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
