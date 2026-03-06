// Day 4 - Object and Array Destructuring Example

// ------------------------------
// Object Destructuring
// ------------------------------
const user = {
  firstName: "Md. Abu Talha",
  lastName: "Taufique",
  role: "Frontend Developer",
  experience: 2
};

// Destructuring object properties
const { firstName, lastName, role, experience } = user;

console.log(`Name: ${firstName} ${lastName}`);
console.log(`Role: ${role}`);
console.log(`Experience: ${experience} years`);


// ------------------------------
// Array Destructuring
// ------------------------------
const skills = ["HTML5", "CSS3", "Tailwind", "JavaScript"];

// Destructuring array elements
const [frontend1, frontend2, framework, language] = skills;

console.log("Frontend Skills:", frontend1, frontend2);
console.log("Framework:", framework);
console.log("Language:", language);


// ------------------------------
// Object Destructuring with Default Values
// ------------------------------
const user2 = {
  firstName: "Talha",
  lastName: "Taufique"
};

// age property does not exist, so we use default value
const { firstName: fName, lastName: lName, age = 25 } = user2;

console.log(`Name: ${fName} ${lName}, Age: ${age}`);


// ------------------------------
// Array Destructuring with Default Values
// ------------------------------
const numbers = [10];

// Assign defaults for missing elements
const [num1, num2 = 20, num3 = 30] = numbers;

console.log("Numbers:", num1, num2, num3);