console.log('Lesson 03 starter loaded');

// Instructor TODO:
// 1. Declare variables using var, let, const
var info; // The "old" way to declare variables
let answer; // The "new" way to declare a variable in JS
const greeting = 'Hello World!'; // A const "variable" MUST be given a value
// greeting = 'Hola!'; // This will cause a run-time crash
let count = 3;
const isActive = true;

// 2. Log their types with console.log(typeof …)
console.log('Type of greeting:', typeof greeting);
console.log('Type of count:', typeof count);
console.log('Type of isActive:', typeof isActive);

// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
confirm('Do you promise to keep up with your Brightspace readings?');
alert('Welcome to the JavaScript demo!');
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName}, shall we continue the demo?`);
console.log('User choice to continue:', continueDemo);

// 4. Manipulate values and observe results in the console
// 4.1 Converting data
const strNumber = '42';
const parsedNumber = parseInt(strNumber, 10); // There are other options like parseFloat, Number, +, etc.
console.log(`Parsed "${strNumber}" to number:`, parsedNumber);
console.log('Convert number back to string:', parsedNumber.toString());

// 4.2 Arithmetic and simple expressions
let x = 10;
let y = 5;
console.log(`${x} + ${y} =`, x + y);    // 10 + 5 = 15
console.log(`${x} - ${y} =`, x - y);    // 10 - 5 = 5
console.log(`${x} * ${y} =`, x * y);    // 10 * 5 = 50
console.log(`${x} / ${y} =`, x / y);    // 10 / 5 = 2
console.log(`${x} % ${y} =`, x % y);    // 10 % 5 = 0

// 4.3 Arrays and objects
const fruits = ['apple', 'banana', 'cherry'];
console.log('Fruits array:', fruits);

const person = { name: 'Alex', age: 30 };
console.log('Person object:', person);

// Student TODO:
// Prompt the user for their name and age
// Log a greeting message using the provided name and age
