const convertToCelsius = function(f) {
  const convertCelsius = (f - 32) * (5 / 9)
  return Math.round(convertCelsius * 10) / 10
};

const convertToFahrenheit = function(c) {
  const convertFahrenheit = c * (9 / 5) + 32
  return Math.round(convertFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
