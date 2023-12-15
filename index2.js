const rs = require("readline-sync");

const operatorFinder = [];

let expQuestion = rs.question("What problem are you looking for?(No spaces) ");

for (let x of expQuestion) {
  operatorFinder.push(x);
}

const re = /\d+/g;
const result = expQuestion.match(re);

let num1 = parseInt(result[0]);
let operator = "";
let num2 = parseInt(result[1]);

for (let finder of operatorFinder) {
  if (finder === "*") {
    operator = finder;
  } else if (finder === "/") {
    operator = finder;
  } else if (finder === "+") {
    operator = finder;
  } else if (finder === "-") {
    operator = finder;
  }
}

console.log(answer(num1, operator, num2));

function answer(x, y, z) {
  if (y === "*") {
    return x * z;
  } else if (y === "/") {
    let ans = x / z;
    return ans.toFixed(2);
  } else if (y === "+") {
    return x + z;
  } else if (y === "-") {
    return x - z;
  }
}
