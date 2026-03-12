// Day 10 - Double Equal vs Triple Equal

// ------------------------------
// Example 1: Double Equal (==)
// ------------------------------
// == compares values and performs implicit conversion

const num = 10;
const str = "10";

console.log("Using == :", num == str); 
// true because "10" is converted to number 10


// ------------------------------
// Example 2: Triple Equal (===)
// ------------------------------
// === compares both value AND data type

console.log("Using === :", num === str); 
// false because number !== string


// ------------------------------
// Example 3: Another implicit conversion example
// ------------------------------

console.log(false == 0); 
// true because false converts to 0

console.log(false === 0); 
// false because boolean !== number