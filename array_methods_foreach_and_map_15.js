// Day 15 - Array Power Methods: forEach() & map()

const numbers = [1, 2, 3, 4, 5];

console.log("=== Using forEach() ===");

// forEach() loops through each element and performs an action
numbers.forEach(function(num, index) {
  console.log(`Index ${index} has Number: ${num}`);
});

console.log("\n=== Using map() ===");

// map() creates a new array by transforming each element
const doubledNumbers = numbers.map(function(num) {
  return num * 2; // double each number
});

// Original array stays intact
console.log("Original Array:", numbers);        
console.log("Doubled Array (using map):", doubledNumbers);