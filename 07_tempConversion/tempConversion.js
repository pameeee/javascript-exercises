const convertToCelsius = function(num) {
    const finalResult = ((num - 32) * (5/9)).toFixed(1);
    return Number((finalResult.endsWith('.0') ? finalResult.slice(0, -2) : finalResult));
};

const convertToFahrenheit = function(num) {

    let finalResult = ((num * (9/5)) + 32).toFixed(1);
    return Number(finalResult.endsWith('.0') ? finalResult.slice(0, -2) : finalResult);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
