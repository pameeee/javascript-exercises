const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
};

const multiply = function(arr) {
    return arr.reduce((acc, val) => acc * val, 1);
};

const power = function(a, b) {
	return a ** b
};

const factorial = function (num) {
    let arrayTwo = Array.from(Array(num), (_, i) => i + 1);
    return arrayTwo.reduce((total, currentValue) => total * currentValue, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
