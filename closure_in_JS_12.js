// Day 12 - Closure Example

function createCounter() {
  let count = 0; // variable in outer function

  return function () {
    // inner function remembers 'count'
    count++;
    console.log("Current count:", count);
  };
}

// createCounter returns a function
const counter = createCounter();

// calling the inner function multiple times
counter();
counter();
counter();