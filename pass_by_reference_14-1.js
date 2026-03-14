// Day 14 - Pass by Reference

function updateUser(user) {
  user.age = 30;
  console.log("Inside function:", user);
}

let person = {
  name: "Talha",
  age: 25
};

updateUser(person);

console.log("Outside function:", person);