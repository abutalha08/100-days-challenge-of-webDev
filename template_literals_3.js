
// Day 3 - Template Literals Example

const firstName = "Md. Abu Talha";
const lastName = "Taufique";
const role = "Frontend Developer";
const experience = 2;

// ------------------------------
// Normal String Concatenation
// ------------------------------
const introNormal = "Hi, I'm " + firstName + " " + lastName + 
                    ", a " + role + " with " + experience + " years of experience.";

console.log(introNormal);

// ------------------------------
// Using Template Literals (ES6)
// ------------------------------
const introTemplate = `Hi, I'm ${firstName} ${lastName},
a ${role} with ${experience} years of experience.`;

console.log(introTemplate);