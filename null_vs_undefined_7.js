// Day 7 - null vs undefined Example

// ------------------------------
// undefined examples
// ------------------------------
let a; // declared but not assigned
console.log("a =", a); // undefined

function greet() {
  // no return statement
}
console.log("greet() =", greet()); // undefined

const user = { name: "Talha" };
console.log("user.age =", user.age); // undefined (property does not exist)


// ------------------------------
// null examples
// ------------------------------
let b = null; // explicitly set to no value
console.log("b =", b);

const person = {
  name: "Abu Talha",
  role: null // intentional absence
};
console.log("person.role =", person.role);