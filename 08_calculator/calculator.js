const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a, b) {
	return a + b;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0)
    { return 1; }
  else
    { return num * rFact( num - 1 ); }
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
