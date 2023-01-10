const analyzeArray = (array) => {
  let length = array.length;
  let average = 0;
  let min;
  let max = 0;
  array.forEach((element) => {
    average += element;
    if (element < min || min === undefined) min = element;
    if (element > max) max = element;
  });
  return {
    average: Math.floor(average / length),
    min: min,
    max: max,
    length: length,
  };
};

module.exports = analyzeArray;
