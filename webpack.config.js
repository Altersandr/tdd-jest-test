const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    capitalize: "./src/capitalize.js",
    calculator: "./src/calculator.js",
    cipher: "./src/caesarCipher.js",
    reverseStr: "./src/reverseString.js",
    arrAnalyze: "./src/analyzeArray.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
