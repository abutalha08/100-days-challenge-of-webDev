// Day 9 - Truthy and Falsy Values Example

// ------------------------------
// Falsy Values
// ------------------------------
const values = [false, 0, "", null, undefined, NaN];

console.log("Checking Falsy Values:");

for (const value of values) {
  if (value) {
    console.log(value, "is Truthy");
  } else {
    console.log(value, "is Falsy");
  }
}


// ------------------------------
// Truthy Values
// ------------------------------
const truthyValues = ["Hello", 42, [], {}, true];

console.log("\nChecking Truthy Values:");

for (const value of truthyValues) {
  if (value) {
    console.log(value, "is Truthy");
  } else {
    console.log(value, "is Falsy");
  }
}