const readline = require("readline");
const r1 = readline.createInterface(process.stdin, process.stdout);

function sayHi(name) {
  console.log(`Hi!! ${name}`);
}
const num1 = 34;
const num2 = 45;

r1.question("Please input a number: ", (num) => {
  console.log(`you inputted ${num}`);
  r1.question(`What is your name: `, (name) => {
    sayHi(name);
    process.exit(0);
  });
});

// function to collect user input
// function to execute the computation
// function to present the result;
// procedural prgramming

// object oriented programming

const getUserInput = () => {
  // write code t get user input
};

const computeResult = (num1, num2, operator) => {
  // write code to compute result
};

const presentResult = (result) => {
  console.log(`  
  =================================
  Your result is ${result} 
  `);
};
