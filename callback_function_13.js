// Day 13 - Callback Function

// A general function that accepts another function
function calculate(a, b, operation) {
  const result = operation(a, b);
  console.log("Result:", result);
}

// Different functions that can act as callbacks

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

// Passing different callbacks
calculate(10, 5, add);
calculate(10, 5, multiply);
calculate(10, 5, subtract);