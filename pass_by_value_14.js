// Day 14 - Pass by Value

function changeValue(num) {
  num = num + 10;
  console.log("Inside function:", num);
}

let number = 5;

changeValue(number);

console.log("Outside function:", number);