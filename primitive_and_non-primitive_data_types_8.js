// Day 8 - Primitive vs Non-Primitive Data Types

// ------------------------------
// Primitive Data Types
// ------------------------------
// Examples: string, number, boolean, null, undefined, bigint, symbol

let a = 10;
let b = a; // copy value

b = 20; // changing b does NOT affect a

console.log("a =", a);
console.log("b =", b);


// ------------------------------
// Non-Primitive Data Types
// ------------------------------
// Examples: object, array, function

const user1 = {
  name: "Talha",
  role: "Frontend Developer"
};

// Copy reference
const user2 = user1;

// Modifying user2 also changes user1
user2.role = "JavaScript Developer";

console.log("user1:", user1);
console.log("user2:", user2);