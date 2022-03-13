const readline = require("readline-sync");

const addsTwoNums = (num1, num2) => num1 + num2

const multiplesTwoNums = (num1, num2) => num1 * num2

const dividesTwoNums = (num1, num2) => {
  return num1 / num2
}

function subtractTwoNums (num1, num2) {
  return num1 - num2
}

let numOne = Number(readline.question('Please enter your first number '));

let numTwo = Number(readline.question('Please enter your second number '));

let mathProblem = readline.question('Please enter the operation to perform: add, sub, mul, div ');

  if (mathProblem === 'add') {
    console.log('The result is: ', addsTwoNums(numOne, numTwo));
} else if (mathProblem === 'sub') {
    console.log('The result is: ', subtractTwoNums(numOne, numTwo));
} else if (mathProblem === 'mul') {
    console.log('The result is: ', multiplesTwoNums(numOne, numTwo));
} else if (mathProblem === 'div') {
    console.log('The result is: ', dividesTwoNums(numOne, numTwo));
} else {
  console.log('You did not select an apporpriate opertation');
}
