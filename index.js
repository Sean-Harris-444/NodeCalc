const rs = require("readline-sync");
// The index2.js is the calculator that works on one line if you care to review that I would greatly appreciate it!

let operator = "";
let operatorQuestion = rs.question("What operator do you need? ");
operator = operatorQuestion;
if (operator === "*") {
  console.log("thank you");
} else if (operator === "/") {
  console.log("thank you");
} else if (operator === "+") {
  console.log("thank you");
} else if (operator === "-") {
  console.log("thank you");
} else {
  console.log("invalid operator");
  operator = rs.question("What operator do you need? ");
}

let num1 = 0;
let getNum1 = rs.questionInt("What is the first number? ");
num1 = getNum1;
let num2 = 0;
let getNum2 = rs.questionInt("What is the second number? ");
num2 = getNum2;

console.log(answer(num1, operator, num2));

function answer(x, y, z) {
  if (y === "*") {
    return x * z;
  } else if (y === "/") {
    return x / z;
  } else if (y === "+") {
    return x + z;
  } else if (y === "-") {
    return x - z;
  }
}
