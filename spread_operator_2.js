
// Day 2 - Spread Operator Example

// Original user object
const user = {
  name: "Talha",
  role: "Frontend Developer",
  skills: ["HTML5", "CSS3"]
};

// Updating object without mutating the original
const updatedUser = {
  ...user, // spread existing properties
  role: "JavaScript Developer", // overwrite role
  skills: [...user.skills, "JavaScript"] // add new skill
};

console.log("Original:", user);
console.log("Updated:", updatedUser);

// Merging arrays
const frontendSkills = ["React", "Tailwind"];
const backendSkills = ["Node.js", "Express"];

const fullStackSkills = [...frontendSkills, ...backendSkills];

console.log("All Skills:", fullStackSkills);