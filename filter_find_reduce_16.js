// Day 16 - Array Power Methods: filter(), find(), reduce()

// Example array of numbers
const numbers = [5, 12, 8, 20, 3, 15];

console.log("=== Using filter() ===");

// filter() returns a new array containing elements
// that match the given condition
const greaterThanTen = numbers.filter(function(num) {
  return num > 10; // keep numbers greater than 10
});

console.log("Numbers greater than 10:", greaterThanTen);



console.log("\n=== Using find() ===");

// find() returns the first element
// that satisfies the condition
const firstGreaterThanTen = numbers.find(function(num) {
  return num > 10;
});

console.log("First number greater than 10:", firstGreaterThanTen);



console.log("\n=== Using reduce() ===");

// reduce() combines all elements into a single value
// 'total' acts as the accumulator
const sum = numbers.reduce(function(total, num) {
  return total + num; // add each number to the accumulator
}, 0); // initial value

console.log("Sum of all numbers:", sum);



// Key Learning Points
// filter() → returns multiple elements that match a condition
// find() → returns only the first matching element
// reduce() → combines all elements into a single result