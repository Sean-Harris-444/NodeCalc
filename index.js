const rs = require("readline-sync");
// The index2.js is the calculator that works on one line if you care to review that I would greatly appreciate it!

const validOperators = ["*", "/", "+", "-"];

let operator = "";

while (true) {
  let operatorQuestion = rs.question(
    "What operation would you like to perform? "
  );
  if (validOperators.includes(operatorQuestion)) {
    console.log(operatorQuestion + " is a valid operator");
    operator = operatorQuestion;
    break;
  } else {
    console.log(operatorQuestion + " That is not a valid operation");
  }
}

let num1 = 0;
let getNum1 = rs.questionInt("What is the first number? ", {
  limitMessage: "This is not a number",
});
num1 = getNum1;
let num2 = 0;
let getNum2 = rs.questionInt("What is the second number? ", {
  limitMessage: "This is not a number",
});
num2 = getNum2;

console.log("The result is", answer(num1, operator, num2));

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
