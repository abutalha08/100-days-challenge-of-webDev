// Day 5 - Object Methods Example

const user = {
  name: "Md. Abu Talha",
  role: "Frontend Developer",
  experience: 2
};

// ------------------------------
// Object.keys, Object.values, Object.entries
// ------------------------------
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));


// ------------------------------
// Delete a property
// ------------------------------
delete user.experience;
console.log("After delete:", user);


// ------------------------------
// Object.seal
// ------------------------------
const sealedUser = { name: "Talha", role: "Developer" };
Object.seal(sealedUser);

// Can update properties
sealedUser.role = "Senior Developer";
// Cannot add new property
sealedUser.experience = 5; // ignored
console.log("Sealed object:", sealedUser);


// ------------------------------
// Object.freeze
// ------------------------------
const frozenUser = { name: "Talha", role: "Developer" };
Object.freeze(frozenUser);

// Cannot update or add properties
frozenUser.role = "Senior Developer"; // ignored
frozenUser.experience = 5; // ignored
console.log("Frozen object:", frozenUser);