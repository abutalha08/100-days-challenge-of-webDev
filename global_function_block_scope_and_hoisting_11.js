// Day 11 - Global Scope, Function Scope, Block Scope & Hoisting

// ------------------------------
// Global Scope Example
// ------------------------------

const globalVar = "I am a global variable";

function showGlobal() {
  // Global variables are accessible inside functions
  console.log(globalVar);
}

showGlobal();


// ------------------------------
// Function Scope Example
// ------------------------------

function greet() {
  var message = "Hello from function scope";
  console.log(message);
}

greet();

// console.log(message);
// ❌ Error: message is not accessible outside the function


// ------------------------------
// Block Scope Example
// ------------------------------

if (true) {
  let blockVar = "I exist only inside this block";
  console.log(blockVar);
}

// console.log(blockVar);
// ❌ Error: blockVar is block scoped


// ------------------------------
// Hoisting Example
// ------------------------------

// Variable declaration is hoisted
console.log(hoistedVar); // undefined

var hoistedVar = "This variable was hoisted";

console.log(hoistedVar);