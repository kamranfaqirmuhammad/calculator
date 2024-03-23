#! /usr/bin/env node

import inquirer from 'inquirer';

const answer = await inquirer.prompt([
  { message: "Enter first #", type: "number", name: "firstNumber" },
  { message: "Enter Second #", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Add", "Sub", "Mul", "Div"],
  },
]);

// condition statment

if(answer.operator === "Add"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Mul"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Sub"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "Div"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{

console.log("Please select valid operator");
} 

console.log(answer)