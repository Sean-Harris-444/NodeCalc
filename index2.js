const rs = require("readline-sync");

getOperator();

function getOperator() {
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
    getOperator();
  }
  return operator;
}

getNum1();

function getNum1() {
  let num1 = 0;
  let getNum1 = rs.questionInt("What is the first number? ");
  if (getNum1 !== NaN) {
    getNum1 = num1;
  } else {
    getNum1();
  }
  return num1;
}

getNum2();

function getNum2() {
  let num2 = 0;
  let getNum2 = rs.questionInt("What is the second number? ");
  if (getNum2 !== NaN) {
    getNum2 = num2;
  } else {
    rs.questionInt("What is the first number? ");
  }
  return num2;
}

answer(getNum1, getOperator, getNum2);

function answer() {
  if (getOperator() === "*") {
    return getNum1 * getNum2;
  } else if (getOperator === "/") {
    return getNum1 / getNum2;
  } else if (getOperator === "+") {
    return getNum1 + getNum2;
  } else if (getOperator === "-") {
    return getNum1 - getNum2;
  }
}
