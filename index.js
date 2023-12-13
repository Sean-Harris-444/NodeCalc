const rs = require("readline-sync");

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
  rs.question("What operator do you need? ");
}

let getNum1 = rs.questionInt("What is the first number? ");
let getNum2 = rs.questionInt("What is the second number? ");
let num1 = 0;
let num2 = 0;

if (getNum1) {
  num1 = getNum1;
} else {
  rs.questionInt("What is the first number? ");
}

if (getNum2) {
  num2 = getNum2;
} else {
  rs.questionInt("What is the first number? ");
}

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
