// Day 6 - for…of vs for…in Loops Example


// ------------------------------
// for…of with arrays (iterates values)
// ------------------------------
const skills = ["HTML5", "CSS3", "Tailwind", "JavaScript"];

console.log("Using for...of:");
for (const skill of skills) {
  console.log(skill);
}


// ------------------------------
// for…in with arrays (iterates indices)
// ------------------------------
console.log("\nUsing for...in with array:");
for (const index in skills) {
  console.log(index, skills[index]);
}


// ------------------------------
// for…in with objects (iterates keys)
// ------------------------------
const user = {
  name: "Md. Abu Talha",
  role: "Frontend Developer",
  experience: 2
};

console.log("\nUsing for...in with object:");
for (const key in user) {
  console.log(key, ":", user[key]);
}